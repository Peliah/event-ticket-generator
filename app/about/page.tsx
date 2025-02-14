import Link from "next/link";

const About = () => {
    return (
        <div className="border border-[#0E464F] max-w-[700px] mx-auto w-full p-12 rounded-3xl bg-[#041E23] flex flex-col gap-6 text-white">
            <h1 className="text-3xl font-bold text-center">
                Event Ticket Booking UI – Open Source Practice Project 🎟️
            </h1>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Overview</h2>
                <p className="text-gray-300 leading-relaxed">
                    This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers to clone, explore, and build upon. The design focuses on a seamless, login-free ticket reservation flow, allowing users to book event tickets quickly and efficiently.
                </p>
                <p className="text-gray-300 leading-relaxed">
                    The project consists of a three-step ticket booking flow, and developers can extend it further by integrating payment solutions, user authentication (optional), and ticket validation systems.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Flow & Features</h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-medium mb-2">1️⃣ Ticket Selection</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Users can browse available tickets (Free & Paid)</li>
                            <li>Ticket options are displayed in a list or card view</li>
                            <li>For Free Tickets → Clicking &ldquo;Get Free Ticket&ldquo; proceeds to attendee details</li>
                            <li>For Paid Tickets → Clicking &ldquo;Purchase Ticket&ldquo; would ideally open a payment modal</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-2">2️⃣ Attendee Details Form</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Users input their Name, Email, and optional Phone Number</li>
                            <li>Profile picture upload option with preview functionality</li>
                            <li>Ticket summary is visible to ensure users review their details before submission</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-2">3️⃣ Payment or Success Page</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>If the ticket is free, the user is taken directly to the Ticket Confirmation Page</li>
                            <li>If the ticket is paid, developers can integrate Stripe, Paystack, or Flutterwave to process payments before showing the confirmation page</li>
                            <li>Upon successful booking, users should receive:
                                <ul className="list-circle pl-6 mt-2 space-y-1">
                                    <li>A visual ticket preview with a unique QR Code</li>
                                    <li>An option to download the ticket as PDF or save it to their device</li>
                                    <li>An email confirmation containing ticket details</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">How to Build This 🚀</h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-medium mb-2">📌 Frontend (Next.js or React)</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Component Breakdown:
                                <ul className="list-circle pl-6 mt-2 space-y-1">
                                    <li>TicketCard.tsx → Displays ticket details</li>
                                    <li>AttendeeForm.tsx → Captures user details</li>
                                    <li>PaymentModal.tsx → Handles payment processing</li>
                                    <li>SuccessScreen.tsx → Shows the final ticket preview</li>
                                </ul>
                            </li>
                            <li>State Management: React&apos;s Context API, Zustand, or Redux (if needed)</li>
                            <li>File Handling: Users should be able to upload images using Firebase Storage, Cloudinary, or local preview</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-2">📌 Backend (Optional)</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>If persistence is required, a backend can be built using:
                                <ul className="list-circle pl-6 mt-2 space-y-1">
                                    <li>Node.js & Express or Firebase Functions</li>
                                    <li>Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket records</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-2">📌 Payment Integration</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>For paid events, developers should integrate:
                                <ul className="list-circle pl-6 mt-2 space-y-1">
                                    <li>Stripe Checkout (for international transactions)</li>
                                    <li>Paystack or Flutterwave (for African users)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">What You&apos;ll Learn 🧑‍💻</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>File handling & validation (profile picture uploads)</li>
                    <li>Dynamic UI updates based on ticket selection</li>
                    <li>Persisting bookings using local state or a backend</li>
                    <li>Integrating payment gateways for ticket purchases</li>
                    <li>Generating & validating QR Codes for event check-in (Advanced)</li>
                </ul>
            </section>

            <section className="mt-2">
                <h2 className="text-2xl font-semibold]">Need Help? Reach Out! 💬</h2>
            </section>

            <section className="w-full flex flex-col items-center justify-center">
                <h1 className="text-center text-white text-[80px] font-normal font-[family-name:var(--font-roboto)] leading-[120px] py-8">
                    💛 Enjoy
                </h1>
                <div className="rounded-2xl border px-12 py-4 bg-[#041E23] border-[#0E464F] flex gap-8 items-center justify-center w-fit h-fit">
                    <Link
                        className="w-[215px] px-6 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 inline-flex overflow-hidden text-[#23a0b5] text-base font-normal font-[family-name:var(--font-roboto)] leading-normal"
                        href={'https://www.figma.com/community/file/1470800949188681164/event-ticket-booking-ui-open-source-practice-project'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Design File
                    </Link>

                    <Link
                        className="w-[215px] px-6 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 inline-flex overflow-hidden text-[#fff] bg-[#23a0b5] text-base font-normal font-[family-name:var(--font-roboto)] leading-normal"
                        href={'https://github.com/Peliah/event-ticket-generator'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github code
                    </Link>

                </div>
            </section>
        </div>
    );
}

export default About;