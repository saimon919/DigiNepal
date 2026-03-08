import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Clock, ArrowRight, BookOpen } from 'lucide-react';
import AdBanner from '../components/AdBanner';

interface GuideSection {
    heading: string;
    body: string;
}

interface Guide {
    title: string;
    category: string;
    readTime: string;
    image: string;
    intro: string;
    sections: GuideSection[];
    conclusion: string;
}

const guidesData: Record<string, Guide> = {
    'how-to-sell-digital-assets-online': {
        title: 'How to Sell Digital Assets Online',
        category: 'Creator Guide',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
        intro: `The digital economy has made it possible for creators anywhere in the world — including Nepal — to earn a sustainable income from their skills. Whether you design 3D models, write game scripts, create seamless textures, or produce UI kits, there's a global market of developers, game studios, architects, and filmmakers actively searching for exactly what you make. This guide walks you through everything you need to know to start selling digital assets online successfully.`,
        sections: [
            {
                heading: 'What Are Digital Assets?',
                body: `Digital assets are any kind of file created for use in digital projects. In the context of marketplaces like DigiNepal, this typically includes: 3D models in formats like FBX, OBJ, BLEND, and GLTF; textures and materials including PBR-ready maps like albedo, normal, roughness, and metallic; game scripts written in C#, GDScript, Lua, or Python; UI kits and design templates for HUDs, menus, and overlays; audio clips, sound effects, and music loops; animations, particle effects, and shader graphs.

The beauty of digital assets is that once created, they can be sold an unlimited number of times without any additional production cost. A texture pack that takes you three days to create can generate passive income for years.`,
            },
            {
                heading: 'Step 1: Choose Your Niche',
                body: `Before creating your first product, identify what kind of assets you want to sell and who your target buyers are. The most successful asset sellers specialize in a specific niche rather than trying to create everything.

Popular niches include: sci-fi and cyberpunk environments (huge demand from indie game devs); low-poly/stylized assets (popular for mobile games); realistic architectural visualizations (needed by architects and interior designers); character rigs with animations (valued by game studios and VFX artists); modular dungeon or castle kits (a consistent bestseller category).

Research what's already selling on marketplaces like DigiNepal, Unity Asset Store, or Fab.com. Look for gaps — categories where demand is high but supply is limited. That's your opportunity.`,
            },
            {
                heading: 'Step 2: Create High-Quality Products',
                body: `Quality is everything. The digital asset market is competitive, and buyers have high standards. Here are the key quality benchmarks to hit:

For 3D models: clean topology with appropriate polygon count for the intended use; proper UV unwrapping with no overlaps; PBR textures at a minimum 2K resolution (4K preferred for hero assets); multiple LOD levels for game engines; proper pivot points and scale (1 unit = 1 meter in most engines).

For textures: seamlessly tileable; provided in multiple resolutions (512, 1K, 2K, 4K); all required maps included (Albedo, Normal, Roughness, Metallic, AO); provided in PNG and ideally also Substance Painter native format.

For scripts: well-commented code; README file explaining setup and usage; no hard dependencies on third-party assets; tested and working on the target platform's latest stable version.

Always test your assets inside the actual target application before publishing. An asset that imports cleanly into Unity or Unreal Engine demonstrates a level of professionalism that buyers notice.`,
            },
            {
                heading: 'Step 3: Set Up Your Creator Profile',
                body: `On DigiNepal, your creator profile is your brand. Before listing your first product, invest time in building a professional profile:

Write a compelling bio that explains your background, specializations, and the types of assets you create. Include your years of experience and any notable projects you've worked on.

Upload a professional profile photo or a recognizable logo. Consistency matters — use the same branding across your social media and portfolio site.

Link your portfolio website or Behance/ArtStation page. Serious buyers want to see more of your work before purchasing.

Set your payout preferences correctly so your earnings can be transferred to your bank or eSewa account smoothly.`,
            },
            {
                heading: 'Step 4: Write Compelling Product Listings',
                body: `Your product listing is your sales page. A poor listing will kill sales even for an excellent product. Here's how to write listings that convert:

Title: Be descriptive and include keywords buyers search for. Instead of "City Pack," write "Cyberpunk City Modular Kit – 150 Props, 4K Textures, Unity & Unreal Ready."

Description: Write at least 300–600 words. Explain what's included, what it's best used for, what makes it unique, and technical specifications. Don't forget to mention software compatibility.

Feature List: Use bullet points for key features — polygon count, texture resolution, file formats, number of assets, animation count, etc.

Compatibility: Clearly state which software and versions are supported. Unity 2022+, Unreal 5+, Blender 3.x — be specific.

Preview Images: High-quality renders are critical. Include wireframe screenshots alongside beauty renders. Show the asset in context (e.g., in a game scene). Aim for at least 4–6 images.

License: Clearly define what buyers can and cannot do with the asset. Most marketplace assets use a Royalty-Free license suitable for commercial projects.`,
            },
            {
                heading: 'Step 5: Price Your Assets Strategically',
                body: `Pricing is more art than science, but here are proven strategies:

Research competitor pricing for similar assets. If a comparable character pack sells for Rs. 800–1,200, that's your benchmark range.

Factor in the time you spent creating the asset, its complexity, and its perceived value. A 200-prop modular kit justifies a higher price than a single environment prop.

Consider introductory pricing when launching new products — lower your price 20–30% for the first few weeks to generate reviews and sales momentum, then raise it once you have social proof.

Bundle related assets together at a slight discount. Bundles often generate higher revenue than individual sales because buyers feel they're getting more value.`,
            },
            {
                heading: 'Step 6: Promote Your Assets',
                body: `Publishing your asset on DigiNepal is just the beginning. Active promotion dramatically accelerates sales:

Social Media: Share process videos (speed modeling, texturing) on Instagram, TikTok, and Twitter/X. Game dev communities love process content. Tag relevant hashtags like #gamedev, #b3d, #indiegame, #3dart.

ArtStation & Behance: Post your finished assets as portfolio pieces. These platforms have built-in audiences of art directors and developers who frequently buy assets.

Dev Communities: Share your assets in subreddits like r/gamedev, r/Unity3D, and r/unrealengine. Be genuinely helpful — don't just drop links. Participate in discussions and people will check out your profile.

YouTube: Create tutorials using your own assets. "Build a cyberpunk scene using this kit" videos both showcase your work and build trust with potential buyers.`,
            },
        ],
        conclusion: `Selling digital assets online is one of the best passive income opportunities for skilled artists and developers. The key is to create genuinely useful, high-quality products, write thorough and honest listings, and consistently promote your work. DigiNepal is the perfect platform for Nepali creators to start this journey — built by the community, for the community. Start with one great asset, gather reviews, and use that momentum to build a growing catalog that earns for you around the clock.`,
    },

    'how-to-use-3d-assets-in-game-development': {
        title: 'How to Use 3D Assets in Game Development',
        category: 'Developer Guide',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=1200&q=80',
        intro: `Building a game solo or with a small indie team means you probably can't model, texture, rig, and animate every single asset yourself. That's where third-party 3D assets come in. Purchased asset packs from marketplaces like DigiNepal give you access to professional-quality models, textures, and animations that would otherwise take weeks or months to create. This guide explains exactly how to import, optimize, and use those assets efficiently inside the most popular game engines.`,
        sections: [
            {
                heading: 'Understanding 3D Asset File Formats',
                body: `Before you can use a 3D asset, you need to understand the file formats it comes in and which ones your game engine prefers:

FBX (.fbx): The most universally supported format. Works natively in Unity, Unreal Engine, and Godot. Supports meshes, armatures, animations, and basic materials. Always your first choice if available.

OBJ (.obj): Simple, widely supported, but doesn't support animations or armatures. Great for static props and environmental assets. Often comes with a companion .mtl material file.

BLEND (.blend): Blender's native format. Can be imported directly into Godot 4 and via a plugin in Unity. Best for assets you plan to further edit in Blender before importing.

GLTF/GLB (.gltf / .glb): A modern, open format gaining popularity. Full support in Godot 4, Three.js, and Babylon.js. Support in Unity and Unreal requires plugins. GLB is the binary (single-file) variant.

Alembic (.abc): Used for complex cached animations and VFX simulations. Supported in Unreal Engine for cinematic sequences.

When buying assets, prioritize packs that include FBX and OBJ formats — these give you the widest compatibility across all major tools.`,
            },
            {
                heading: 'Importing Assets into Unity',
                body: `Unity makes importing 3D assets straightforward:

Basic Import: Simply drag and drop your FBX or OBJ file directly into your Unity Project window. Unity will automatically create a Model importer asset and extract the mesh data.

Import Settings: Click the imported model in the Project window and examine the Inspector. The key settings to configure are: Scale Factor (set to 1 for a 1-unit = 1-meter workflow), Mesh Compression (balance between size and quality), Generate Lightmap UVs (enable for assets that will receive baked lighting), and the Rig tab if your model includes a skeleton.

Textures: Create a Materials folder and apply your PBR textures. For URP or HDRP pipelines, use the "Universal Render Pipeline/Lit" or "HDRP/Lit" shader. Map Albedo → Base Map, Normal Map, Metallic, Smoothness (inverted Roughness), and AO accordingly.

Prefabs: Once configured, drag your imported model into the scene and create a Prefab from it (right-click → Prefab → Create Prefab). This lets you reuse the fully configured asset across multiple levels.

LODs: If the asset pack includes multiple LOD meshes, right-click → 3D Object → LOD Group, and assign each resolution mesh to the appropriate LOD level. This drastically improves performance in large scenes.`,
            },
            {
                heading: 'Importing Assets into Unreal Engine 5',
                body: `Unreal Engine's import pipeline is equally powerful:

Import via Content Browser: Drag an FBX file into your Content Browser, or use File → Import into Level. The FBX Import Options dialog gives you fine control over skeletal meshes, animations, and materials.

Nanite (UE5): For highly detailed static meshes, enable Nanite in the asset's Static Mesh Editor. Nanite automatically handles virtualized micropolygon geometry, eliminating the need for manual LODs on supported hardware.

Lumen: Ensure your assets have proper lightmap UVs for use with Lumen global illumination. Most professional packs include pre-generated lightmap UVs in their second UV channel.

Material Instancing: Create Material Instances from your base materials to efficiently reuse and tweak material parameters (like color tint or roughness) across multiple objects without creating entirely new materials.

Blueprint Integration: Once imported, you can wrap assets in Blueprints to add game logic — collision handling, interaction events, destructibility, etc.`,
            },
            {
                heading: 'Importing Assets into Godot 4',
                body: `Godot 4 has significantly improved its import pipeline:

GLTF/GLB: Godot 4's preferred format. Drag a GLB file into the FileSystem panel and Godot generates an import scene automatically. Double-click to review the import settings.

Blender Workflow: If you buy a BLEND file, Godot 4 can import it directly via the Blender import plugin (set the Blender path in Editor Settings). This enables an excellent iterative workflow.

Custom Import Scenes: For complex assets with animations, use the Advanced Import Settings dialog to define which tracks to import and how to handle animation naming conventions.

Shader Setup: Apply SpatialMaterial (now StandardMaterial3D) to meshes. Map Albedo, Normal, Metallic, Roughness, and Ambient Occlusion maps from your asset pack's texture folder.`,
            },
            {
                heading: 'Optimizing Purchased Assets for Performance',
                body: `Professional asset packs are made to look great in renders — but games have strict performance budgets. Here's how to optimize:

Polygon Count Reduction: High-poly assets need decimation for game use. Use Blender's Decimate modifier or Unreal's Polygon Reduction tool to lower count without destroying silhouette quality.

Texture Atlasing: Combine multiple small textures onto a single large atlas texture (e.g., 4K). This reduces draw calls significantly in large scenes.

Material Batching: In Unity (URP), enable GPU instancing on materials used by many identical objects. In Unreal, use the Instanced Static Mesh component for repeated props.

Occlusion Culling: Enable occlusion culling in your game engine settings so assets behind walls or outside the camera frustum are not rendered.

LOD Groups: Manually create lower-poly versions of complex assets for distant rendering. A 10,000 polygon hero prop can drop to 500 polygons at 50 meters without any visual difference.`,
            },
            {
                heading: 'Respecting Asset Licenses in Your Game',
                body: `This is critically important and often overlooked. When you purchase a digital asset, you receive a license to use it — not ownership of the asset itself. Here's what this means practically:

Royalty-Free Commercial License (most common on DigiNepal): You can use the asset in commercial games/applications without paying royalties per sale, but you cannot resell, redistribute, or sublicense the raw files. Your finished game is fine; extracting the asset from your game and selling it separately is not.

Extended License: Allows use in templates or products where end users might interact directly with the source files. Required if you're building a game editor or modding toolkit.

Editorial Only: Not for commercial use. Rare for game assets, but watch out for this in archival or photogrammetry packs.

Always read the license included with every pack you purchase, and keep records of your purchases as proof of license.`,
            },
        ],
        conclusion: `Using third-party 3D assets intelligently is a superpower for small game development teams. By understanding file formats, mastering your engine's import pipeline, optimizing for performance, and respecting licenses, you can build visually stunning games in a fraction of the time it would take to model everything from scratch. DigiNepal's catalog of curated assets — tested with Unity, Unreal, and Blender — gives you everything you need to bring your game vision to life.`,
    },

    'beginner-guide-to-game-art-assets': {
        title: 'Beginner Guide to Game Art Assets',
        category: 'Beginner',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80',
        intro: `If you're new to game development or digital art, the world of game art assets can feel overwhelming. What exactly are "PBR textures"? What's the difference between a mesh and a prefab? Why does polygon count matter? This beginner's guide breaks down everything you need to know about game art assets — in plain language — so you can start building amazing games or art projects faster than you thought possible.`,
        sections: [
            {
                heading: 'What Are Game Art Assets?',
                body: `Game art assets are the visual building blocks of any game or interactive experience. Every object you see in a game — characters, trees, buildings, rocks, swords, UI buttons, particle effects — exists as one or more art assets.

A game art asset is typically a digital file (or collection of files) that includes:
- A 3D mesh (the shape of the object)
- Texture maps (the color, roughness, and surface detail)
- Materials (how the object reacts to light)
- Animations (if the object moves)
- Metadata (pivot point, scale, collision data)

Game art assets are created by specialized artists: 3D modelers, texture artists, riggers, and animators. Buying pre-made assets from marketplaces like DigiNepal means you can skip the creation step and go straight to building your game.`,
            },
            {
                heading: 'Types of Game Art Assets Explained',
                body: `Here's a breakdown of the main categories you'll encounter:

3D Models / Meshes: The geometric shape of objects. A tree, a castle tower, a spaceship — these are all meshes. They come in formats like FBX, OBJ, and GLTF. Complexity is measured in polygon (poly) count — simple mobile-friendly assets might be 200–1,000 polys, while detailed PC game assets can be 20,000–100,000 polys.

Textures: Flat image files that wrap around a 3D mesh like a skin. In modern "PBR" (Physically Based Rendering) workflows, a single object usually needs multiple texture maps: Albedo/Diffuse (the base color), Normal Map (surface detail without extra polygons), Roughness/Smoothness (how shiny or matte the surface is), Metallic (metal-like reflection properties), and Ambient Occlusion (subtle shadowing in crevices).

Materials: Instructions that tell a game engine how to combine your textures and how the surface interacts with light. Buying an asset pack usually means the creator has already set up the materials — you just need to apply them.

Animations: Pre-made movement data. A "walk cycle," "idle," "death," or "attack" animation for a character. In FBX format, animations are often embedded in the same file as the mesh.

Books PDF & References: Extensive guides, concept art collections, and technical manuals to aid your development process.

Prefabs: In Unity specifically, a prefab is a pre-configured game object with a mesh, materials, and components already set up — drag-and-drop ready. Many professional asset packs include prefabs.

Audio Assets: Sound effects and music loops. Not always discussed alongside 3D assets, but they're equally important for immersion.

VFX / Particles: Visual effects like fire, explosions, magic spells, and weather. Can be purchased as ready-to-use particle systems for Unity or Niagara systems for Unreal.`,
            },
            {
                heading: 'Understanding Art Styles',
                body: `Game art comes in several distinct styles, and it's important to stay consistent within your project:

Realistic / AAA: Highly detailed, photorealistic assets using full PBR workflows. High polygon count, 4K textures. Beautiful but performance-heavy. Examples: The Last of Us environments, Red Dead Redemption landscapes.

Stylized / Cartoon: Deliberately non-realistic with bold colors and simplified shapes. Think Fortnite or Zelda: Breath of the Wild. Very popular because it's easier to achieve a consistent look on a budget.

Low-Poly: Severely limited polygon count as an artistic choice, not a technical limitation. Distinctive faceted look. Very popular for indie and mobile games — easier to create and runs well on any hardware.

Pixel Art: 2D art style made of individual pixels. A timeless indie classic (Stardew Valley, Celeste). Not 3D at all, but still categorized as a game art asset type.

Voxel: Made up of 3D cubes (voxels). Think Minecraft. Easy to create, distinctive look.

When purchasing assets from DigiNepal, filter by art style to ensure everything in your game looks coherent.`,
            },
            {
                heading: 'How to Read an Asset Pack Description',
                body: `When you're browsing DigiNepal, you'll see product descriptions full of technical terms. Here's a quick decoder:

"Polygon Count: 2,500 tris" — The mesh has 2,500 triangles. Lower = better for mobile, higher = more detail for PC/console.

"PBR Textures, 4K" — Comes with Physically Based Rendering texture maps at 4096×4096 pixel resolution.

"Rigged, Mixamo Compatible" — The character has a skeleton that works with Mixamo's animation library.

"Unity URP / HDRP compatible" — Works with Unity's Universal and High-Definition Render Pipelines.

"Modular" — Components can be mixed and matched to create varied compositions.

"45 props included" — Get 45 individual objects in one purchase.

"LOD0–LOD3" — Includes 4 levels of detail from high (LOD0) to low (LOD3) for performance at distance.`,
            },
            {
                heading: 'Your First Asset Purchase — What to Buy',
                body: `If you're building your first game and don't know where to start with assets, here's a practical shopping list depending on your game type:

For a Dungeon/Fantasy RPG: Start with a Modular Dungeon Kit (walls, floors, pillars), a character pack with animations, and a torch/fire VFX pack. That's the core visual vocabulary of your game.

For a Sci-Fi Shooter: Look for a sci-fi props pack (crates, terminals, doors), an environment modular kit (corridors, rooms), and a character with modern military animations.

For a Casual Mobile Game: Low-poly stylized packs work best. Find a low-poly nature pack (trees, rocks, grass) and a simple character model.

Start small — buy a few assets, learn to import them in your engine, get comfortable, then expand your library. Don't buy hundreds of packs before you've built anything.`,
            },
            {
                heading: 'Combining Purchased Assets with Your Own Work',
                body: `Experienced game developers mix purchased assets with their own custom-created work. This is completely normal and commercially fine under most licenses.

For example, you might buy a city environment kit but model your main character from scratch to ensure it perfectly matches your design vision. Or buy a texture library but hand-model all your architecture.

The key principle: use purchased assets for background/environmental elements where uniqueness matters less, and invest your custom art time in the elements players focus on most — characters, weapons, key story objects.

When mixing assets from multiple creators, watch out for style consistency (different art directions can clash) and polygon/texture budget (buying packs at different quality tiers can look inconsistent).`,
            },
        ],
        conclusion: `Understanding game art assets is one of the most valuable skills you can develop as a game developer or digital artist. Knowing what to buy, what to create, and how they all fit together will save you months of development time. DigiNepal's curated library of high-quality assets — covering every style from photorealistic to low-poly — is your starting point. Browse the store, read descriptions carefully, and start building the game you've always imagined.`,
    },

    'how-modular-asset-packs-work': {
        title: 'How Modular Asset Packs Work',
        category: 'Design System',
        readTime: '9 min read',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
        intro: `Professional game studios have a secret weapon for creating massive, varied game worlds without spending years on art production: modular asset systems. Instead of hand-crafting every unique building, corridor, or landscape feature, they assemble complex environments from a library of reusable, interlocking pieces — like 3D LEGO at scale. This guide explains exactly how modular asset packs work, why they're so powerful, and how you can use them to dramatically accelerate your own project's visual development.`,
        sections: [
            {
                heading: 'The Core Philosophy of Modular Design',
                body: `The fundamental idea behind modular level design is simple: instead of building unique, one-off setpieces, you build a vocabulary of reusable parts that can be combined in infinite ways.

Imagine a dungeon. Instead of sculpting a unique stone corridor for every encounter room, a modular system gives you: a straight wall section, a corner wall section, a T-junction, a doorway frame, a floor tile, a ceiling section, a pillar, and an arch. By combining these pieces in different configurations, you can build hundreds of unique-looking rooms without ever creating a new asset.

This philosophy comes directly from the construction industry — buildings are assembled from standardized beams, panels, and connections. Modular game design applies the same principle digitally.

The core requirement for this to work is a consistent grid system. All pieces in a modular pack are designed to snap together on a fixed grid (commonly 1m, 2m, or 4m units). A door frame is exactly as wide as a wall section, a hallway is exactly as wide as a room opening, and so on. This alignment is what makes seamless assembly possible.`,
            },
            {
                heading: 'Types of Modular Asset Sets',
                body: `Modular packs come in several flavors depending on their scope and intended use:

Architectural/Structural Sets: Walls, floors, ceilings, doors, windows, arches, and pillars. The skeleton of any built environment — dungeons, castles, space stations, apartments. These are the most common modular packs.

Landscape/Terrain Sets: Cliff sections, rock formations, ground patches, river banks, road segments. Allow you to build natural terrain features that tile seamlessly in any direction.

Interior Decoration Sets: Furniture, props, containers, light fixtures, and decorations. Placed within structural shells to add life and character.

Infrastructure/Sewage/Piping Sets: Industrial pipework, conduits, walkways, catwalks, metal grating. Perfect for dystopian or sci-fi environments.

Urban/City Block Sets: Building facades, storefronts, sidewalk sections, urban props. Allow the construction of cities without modeling individual buildings.

Sci-Fi/Corridor Sets: Possibly the most popular category in game development — clean or grungy corridor segments, hatch doors, control panels, exposed wiring, and maintenance tunnels.`,
            },
            {
                heading: 'The Grid System Explained',
                body: `Understanding the grid is the most important technical concept in modular design. Every piece in a professional modular pack is designed on a mathematical grid.

For example, a 2-meter grid system means: every wall section is exactly 2m wide and 3m tall; every floor tile is exactly 2m × 2m; doorways are exactly 2m wide (aligning with one wall section); rooms are 2m, 4m, 6m, 8m wide (multiples of the grid unit).

In Unity, enable "Snap Settings" (Grid → Grid Snap) and set snap to 1m or 2m to match your asset pack's grid. In Unreal Engine, hold Shift while placing objects and set the grid snap value in the viewport. In Godot, enable grid snapping in the 3D viewport toolbar.

When pieces are placed on their grid, they fit together perfectly — no gaps, no overlaps, no misaligned textures. This is the magic that makes modular workflows feel effortless.

One critical thing to check when buying a modular pack: look for a documentation PDF or README that states the grid unit size. Mixing packs designed on different grids (e.g., a 1m-grid pack and a 2m-grid pack) creates misalignment headaches.`,
            },
            {
                heading: 'How Texture Atlases Enable Modular Efficiency',
                body: `Modular packs combine visual efficiency with technical performance through a unified texture atlas — a single large texture (often 4K or 8K) that contains all the individual material details for every piece in the kit.

Instead of each wall section, floor tile, and ceiling having its own separate texture file (which would create dozens of draw calls in a large scene), the entire set shares one atlas. The UV maps of each piece simply reference different regions on the same texture.

This is a major performance advantage: a scene with 200 modular pieces that all share one material makes only 1 draw call for all of them (with GPU instancing enabled), significantly improving frame rates.

When buying modular packs from DigiNepal, look for descriptions that mention "texture atlas" or "shared UVs" — these are signs of professional, performance-conscious design.`,
            },
            {
                heading: 'Building a Scene with a Modular Kit — Step by Step',
                body: `Here's a practical workflow for building a scene using a modular dungeon pack:

Step 1 — Plan on Paper: Sketch your room layout at the grid scale. Mark doors, corridors, and key areas. This prevents endless rebuilding later.

Step 2 — Place the Floor: Start by tiling floor pieces to define the room footprint. Use snap-to-grid to ensure alignment.

Step 3 — Add Walls: Place wall segments around the perimeter. Leave empty grid spaces where doors will go.

Step 4 — Add Doorways and Arches: Place doorframe pieces in the gaps you left.

Step 5 — Ceiling and Top Trim: Add ceiling tiles and any trim pieces that run along the top edges of walls.

Step 6 — Structural Detailing: Add pillars at corners, exposed beam elements along the ceiling, and any structural accent pieces.

Step 7 — Prop Dressing: Now add non-structural props — torches, barrels, crates, chests, bones, tapestries. These break up the repetition and make the space feel lived-in.

Step 8 — Lighting: Place point lights, spotlights, and area lights. Bake lighting if your engine supports it for best performance in static environments.

Step 9 — Variation: Swap in some variant pieces — a crumbling wall instead of an intact one, a flooded floor section, a collapsed ceiling. Most professional packs include damaged or variant versions of key pieces.`,
            },
            {
                heading: 'Combining Multiple Modular Packs',
                body: `Once you've mastered one modular pack, you can combine multiple kits to create richer environments. For example: a dungeon structural pack for the architecture, a medieval interior props pack for furniture and decoration, a water and FX pack for atmospheric elements.

The key challenge is visual consistency. Two packs with different art directions (one stylized, one realistic) will clash. Before buying, compare: material style (matte vs. shiny surfaces), color palette (warm tones vs. cool tones), polygon density (high-detail vs. efficient), and texture format and scale.

Packs from the same creator often work well together by design. On DigiNepal, look for creators who offer themed bundles or pack series — these are intentionally designed to be combined.

Grid compatibility is also key. If your structural pack uses a 2m grid and your props pack uses centimeter precision, you'll need to decide on your master grid and stick to it.`,
            },
            {
                heading: 'When to Use Modular vs. Unique Assets',
                body: `Modular assets are powerful, but they're not always the right choice. Here's how to decide:

Use modular when: building large areas that need to feel geographically consistent (dungeons, space stations, caves, cities); you need many variations of the same type of space; you want maximum build flexibility; you have a tight art budget.

Use unique/hero assets when: a specific object is central to your game's identity (your main character, a key story prop); a setpiece needs to be visually distinctive and memorable; the object is seen up close and needs maximum detail that a modular approach would compromise.

Most shipped games use both — a modular backbone for environments, combined with purpose-built hero pieces for key moments. This hybrid approach gives you the efficiency of modularity with the visual impact of bespoke art.`,
            },
        ],
        conclusion: `Modular asset packs are one of the most powerful tools in a game developer's arsenal. By understanding the grid system, texture atlases, and the workflow of assembling scenes from reusable pieces, you can build extensive, varied game worlds in a fraction of the time traditional world-building requires. DigiNepal's collection of professionally designed modular kits — for dungeons, sci-fi environments, urban settings, and more — gives you a solid foundation to start building your world today.`,
    },
};

export default function GuideDetail() {
    const { slug } = useParams<{ slug: string }>();
    const guide = slug ? guidesData[slug] : null;

    if (!guide) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-bold text-text-dim">Guide not found</h2>
                <Link to="/guides" className="bg-primary text-white px-6 py-2 rounded-full font-bold">
                    Back to Guides
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 space-y-10">
            {/* Breadcrumb */}
            <Link to="/guides" className="inline-flex items-center gap-2 text-text-dim hover:text-primary transition-colors font-medium">
                <ChevronLeft size={18} /> Back to Guides
            </Link>

            {/* Hero */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <span className="bg-secondary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{guide.category}</span>
                    <span className="text-xs text-text-dim flex items-center gap-1"><Clock size={12} /> {guide.readTime}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-black text-text-main leading-tight">{guide.title}</h1>
                <p className="text-lg text-text-dim leading-relaxed">{guide.intro}</p>
            </div>

            {/* Cover Image */}
            <div className="rounded-3xl overflow-hidden aspect-video">
                <img src={guide.image} alt={guide.title} className="w-full h-full object-cover" />
            </div>

            {/* Ad Banner */}
            <AdBanner slot="horizontal" />

            {/* Article Sections */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-gray-100 space-y-10">
                {guide.sections.map((section, idx) => (
                    <div key={idx}>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-text-main flex items-center gap-3">
                                <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-black shrink-0">{idx + 1}</span>
                                {section.heading}
                            </h2>
                            {section.body.split('\n\n').map((para, i) => (
                                <p key={i} className="text-text-dim leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </section>
                        {/* In-article ad after section 3 */}
                        {idx === 2 && <AdBanner slot="in-article" className="mt-6" />}
                    </div>
                ))}

                {/* Conclusion */}
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 space-y-3">
                    <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                        <BookOpen size={20} /> Conclusion
                    </h2>
                    <p className="text-text-dim leading-relaxed">{guide.conclusion}</p>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-text-main rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                    <h3 className="text-2xl font-display font-black">Ready to explore assets?</h3>
                    <p className="text-white/60">Browse DigiNepal's curated collection of professional-grade digital assets.</p>
                </div>
                <Link
                    to="/store"
                    className="bg-accent text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent/90 transition-all shrink-0"
                >
                    Browse Store <ArrowRight size={18} />
                </Link>
            </div>

            {/* More Guides */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-text-main">More Guides</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(guidesData)
                        .filter(([s]) => s !== slug)
                        .slice(0, 2)
                        .map(([s, g]) => (
                            <Link
                                key={s}
                                to={`/guides/${s}`}
                                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft hover:shadow-md transition-all group flex items-center gap-4"
                            >
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                                    <BookOpen size={20} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-text-main group-hover:text-primary transition-colors line-clamp-2 text-sm">{g.title}</p>
                                    <p className="text-xs text-text-dim mt-1">{g.readTime}</p>
                                </div>
                                <ArrowRight size={16} className="text-text-dim group-hover:text-primary shrink-0 transition-colors" />
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
}
