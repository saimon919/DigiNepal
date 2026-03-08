import { ShieldCheck, AlertTriangle, FileText } from 'lucide-react';

export default function DMCA() {
    return (
        <div className="max-w-4xl mx-auto py-16 px-4 space-y-12">
            <div className="space-y-4">
                <span className="bg-secondary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">Legal</span>
                <h1 className="text-4xl md:text-6xl font-display font-black text-primary leading-tight">DMCA & Copyright Policy</h1>
                <p className="text-text-dim">Last updated: March 8, 2026</p>
            </div>

            {/* Intro Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: <ShieldCheck size={28} />, title: 'We Respect IP', desc: 'DigiNepal takes intellectual property rights seriously and acts swiftly on valid complaints.' },
                    { icon: <AlertTriangle size={28} />, title: 'Zero Tolerance', desc: 'Repeat infringers are permanently banned from the platform under our termination policy.' },
                    { icon: <FileText size={28} />, title: 'DMCA Compliant', desc: 'We follow the Digital Millennium Copyright Act (DMCA) for all takedown procedures.' },
                ].map((item, i) => (
                    <div key={i} className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100 space-y-3">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">{item.icon}</div>
                        <h3 className="font-bold text-text-main">{item.title}</h3>
                        <p className="text-sm text-text-dim leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft space-y-10 border border-gray-100">

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-text-main">1. Overview</h2>
                    <p className="text-text-dim leading-relaxed">
                        DigiNepal respects the intellectual property rights of others and expects our users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 (DMCA), we will respond expeditiously to claims of copyright infringement committed using the DigiNepal platform, provided that the claims are submitted in accordance with the procedure outlined below.
                    </p>
                    <p className="text-text-dim leading-relaxed">
                        It is our policy to terminate the accounts of users who are determined to be repeat infringers. If you believe that content available on DigiNepal infringes one or more of your copyrights, please notify us by submitting a DMCA Takedown Request.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-text-main">2. DMCA Takedown Request</h2>
                    <p className="text-text-dim leading-relaxed">
                        To submit a valid DMCA takedown request, please provide our designated copyright agent with the following information in writing:
                    </p>
                    <ol className="list-decimal list-inside space-y-3 text-text-dim">
                        <li>
                            <strong>Identification of the copyrighted work:</strong> A description of the copyrighted work you claim has been infringed, or if multiple works are covered by a single notification, a representative list of such works.
                        </li>
                        <li>
                            <strong>Identification of the infringing material:</strong> A description of the material that you claim is infringing and its location on DigiNepal (e.g., URL of the product listing). Please be specific enough to allow us to locate the material.
                        </li>
                        <li>
                            <strong>Your contact information:</strong> Your address, telephone number, and email address so that we can contact you.
                        </li>
                        <li>
                            <strong>A statement of good faith:</strong> A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.
                        </li>
                        <li>
                            <strong>A statement of accuracy:</strong> A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.
                        </li>
                        <li>
                            <strong>Your signature:</strong> A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.
                        </li>
                    </ol>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-text-main">3. Where to Send Your Request</h2>
                    <p className="text-text-dim leading-relaxed">
                        Send your completed DMCA takedown notice to our Designated Copyright Agent:
                    </p>
                    <div className="bg-bg rounded-2xl p-6 space-y-2 border border-gray-100">
                        <p className="font-bold text-text-main">DigiNepal DMCA Agent</p>
                        <p className="text-text-dim">Pokhara, Kaski, Nepal</p>
                        <p className="text-text-dim">Email: <a href="mailto:sunarsaimon.43244@gmail.com" className="text-primary underline">sunarsaimon.43244@gmail.com</a></p>
                        <p className="text-text-dim">Subject Line: <strong>DMCA Takedown Request – [Product Name]</strong></p>
                    </div>
                    <p className="text-text-dim leading-relaxed">
                        We aim to process all valid DMCA takedown requests within <strong>5 business days</strong>. Incomplete or invalid requests may be disregarded.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-text-main">4. Counter-Notification Procedure</h2>
                    <p className="text-text-dim leading-relaxed">
                        If you believe your content was removed as a result of a mistake or misidentification, you may submit a counter-notification. To be effective, a counter-notification must include:
                    </p>
                    <ol className="list-decimal list-inside space-y-3 text-text-dim">
                        <li>Your physical or electronic signature.</li>
                        <li>Identification of the material that was removed and its original location on DigiNepal.</li>
                        <li>A statement under penalty of perjury that you have a good faith belief that the material was removed as a result of mistake or misidentification.</li>
                        <li>Your name, address, and telephone number, and a statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located.</li>
                    </ol>
                    <p className="text-text-dim leading-relaxed">
                        Upon receipt of a valid counter-notification, we may restore the removed content within 10–14 business days, unless the original complaining party files a court action against you during that time.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-text-main">5. Repeat Infringer Policy</h2>
                    <p className="text-text-dim leading-relaxed">
                        In appropriate circumstances and at DigiNepal's sole discretion, we will disable or terminate the accounts of users who are found to be repeat infringers. We define "repeat infringers" as users who have uploaded content that has been the subject of more than two valid takedown requests and whose counter-notifications, if filed, have not been upheld.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-text-main">6. False Notices</h2>
                    <p className="text-text-dim leading-relaxed">
                        Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability for damages. If you are unsure whether a particular use qualifies as infringement, we recommend consulting with an attorney before filing a notice.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-text-main">7. Copyright Protection for Sellers</h2>
                    <p className="text-text-dim leading-relaxed">
                        DigiNepal is committed to protecting the creative work of all our sellers. If you're a seller and believe someone has copied your work without permission, please submit a DMCA notice using the process described above. We also encourage sellers to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-text-dim">
                        <li>Add watermarks to preview images to deter unauthorized use.</li>
                        <li>Register their original works with appropriate copyright offices.</li>
                        <li>Keep records of original creation files and timestamps.</li>
                        <li>Clearly document the license terms for each product listing.</li>
                    </ul>
                </section>

            </div>
        </div>
    );
}
