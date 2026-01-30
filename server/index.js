
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = 3001;

// ROBUST PATHING
let rootDir = process.cwd();
if (rootDir.endsWith('server')) rootDir = path.join(rootDir, '..');
const uploadDir = path.resolve(rootDir, 'uploads');
const productsFile = path.resolve(rootDir, 'products.json');
const ordersFile = path.resolve(rootDir, 'orders.json');
const usersFile = path.resolve(rootDir, 'users.json');

if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// PERSISTENCE
let products = [];
if (fs.existsSync(productsFile)) {
    try { products = JSON.parse(fs.readFileSync(productsFile, 'utf8')); } catch (e) { }
}

let orders = [];
if (fs.existsSync(ordersFile)) {
    try { orders = JSON.parse(fs.readFileSync(ordersFile, 'utf8')); } catch (e) { }
}

let users = [];
if (fs.existsSync(usersFile)) {
    try { users = JSON.parse(fs.readFileSync(usersFile, 'utf8')); } catch (e) { }
} else {
    // Initial Seed
    users = [
        { id: 1, name: 'Admin', email: 'admin@diginepal.com', password: 'admin', role: 'admin' },
        { id: 2, name: 'User', email: 'user@diginepal.com', password: 'user', role: 'user' }
    ];
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

const saveProducts = () => {
    try { fs.writeFileSync(productsFile, JSON.stringify(products, null, 2)); } catch (e) { console.error("Save Products Failed", e); }
};
const saveOrders = () => {
    try { fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2)); } catch (e) { console.error("Save Orders Failed", e); }
};
const saveUsers = () => {
    try { fs.writeFileSync(usersFile, JSON.stringify(users, null, 2)); } catch (e) { console.error("Save Users Failed", e); }
};

app.use(cors());
app.use(express.json());

// Logger
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
    next();
});

app.use('/uploads', express.static(uploadDir));

// Multer Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const name = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, name + ext);
    }
});
const upload = multer({ storage });

// API Endpoints
app.get('/api/health', (req, res) => res.json({ status: 'ok', port: PORT }));

// File Upload (Generic)
app.post('/api/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        console.log("[Server] Upload failed: No file");
        return res.status(400).json({ success: false });
    }
    const fileUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
    console.log(`[Server] File uploaded: ${req.file.filename}`);
    res.json({ success: true, url: fileUrl });
});

// Products
app.get('/api/products', (req, res) => res.json(products));
app.post('/api/products', (req, res) => {
    const newP = { id: Date.now(), ...req.body };
    products.push(newP);
    saveProducts();
    res.json(newP);
});
app.delete('/api/products/:id', (req, res) => {
    products = products.filter(p => p.id != req.params.id);
    saveProducts();
    res.json({ success: true });
});

// Orders
app.get('/api/orders', (req, res) => res.json(orders));
app.post('/api/orders', (req, res) => {
    console.log("[Server] Receiving new order...");
    const newOrder = {
        id: Date.now(),
        status: 'Pending',
        date: new Date().toISOString().split('T')[0],
        ...req.body
    };
    orders.push(newOrder);
    saveOrders();
    console.log(`[Server] Order saved: #${newOrder.id}`);
    res.json(newOrder);
});
app.get('/api/orders/user/:email', (req, res) => {
    const userOrders = orders.filter(o => o.customerEmail === req.params.email);
    res.json(userOrders);
});

// Users
app.get('/api/users', (req, res) => res.json(users));

app.put('/api/orders/:id/approve', (req, res) => {
    const order = orders.find(o => o.id == req.params.id);
    if (order) {
        order.status = 'Approved';
        saveOrders();
        return res.json({ success: true, order });
    }
    res.status(404).json({ success: false });
});

// Auth
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const u = users.find(x => x.email === email && x.password === password);
    if (u) return res.json({ success: true, user: { name: u.name, email: u.email, role: u.role } });
    res.status(401).json({ success: false });
});
app.get('/api/users', (req, res) => res.json(users.map(({ password, ...x }) => x)));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Server] API running on http://localhost:${PORT}`);
});
