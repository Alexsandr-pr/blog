

const Page = () => {
    return (
        <main className='max-w-[702px] main mx-auto px-4'>
           <section className="flex flex-col gap-10 py-12 md:pt-24 md:pb-16">
    <h1 className="title !text-left">Privacy Policy</h1>

    <div className="flex flex-col gap-4 ">
        <h2 className="title-2">Data Collection and Use</h2>
        <p className="text">
            We may collect and process the following types of data:
        </p>
        <ul className="flex flex-col gap-3">
            <li className="text relative items-start before:w-2 before:min-w-2 before:h-2 before:bg-grey-dark before:rounded-full before:block before:mt-2 flex gap-2">
                <span><strong>Personal Information</strong> &mdash; such as your name, email address, and contact details when you register on the website or subscribe to our newsletter.</span>
            </li>
            <li className="text relative items-start before:w-2 before:min-w-2 before:h-2 before:bg-grey-dark before:rounded-full before:block before:mt-2 flex gap-2">
                <span><strong>Automatically Collected Information</strong> &mdash; like your IP address, browser type, operating system, and other technical information that helps us improve our website.</span>
            </li>
            <li className="text relative items-start before:w-2 before:min-w-2 before:h-2 before:bg-grey-dark before:rounded-full before:block before:mt-2 flex gap-2">
                <span><strong>Cookies</strong> &mdash; small files stored on your device to enhance site interaction, personalize content, and gather analytics.</span>
            </li>
        </ul>
    </div>

    <div className="flex flex-col gap-4 ">
        <h2 className="title-2">Use of Data</h2>
        <p className="text">We use your data for the following purposes:</p>
        <ul className="flex flex-col gap-3">
            <li className="text relative items-start before:w-2 before:min-w-2 before:h-2 before:bg-grey-dark before:rounded-full before:block before:mt-2 flex gap-2">
                To provide services and respond to your inquiries.
            </li>
            <li className="text relative items-start before:w-2 before:min-w-2 before:h-2 before:bg-grey-dark before:rounded-full before:block before:mt-2 flex gap-2">
                To improve the functionality of our website and user experience.
            </li>
            <li className="text relative items-start before:w-2 before:min-w-2 before:h-2 before:bg-grey-dark before:rounded-full before:block before:mt-2 flex gap-2">
                To send you news and updates if you&apos;ve subscribed to our newsletter.
            </li>
        </ul>
    </div>

    <div className="flex flex-col gap-4 ">
        <h2 className="title-2 ">Data Security</h2>
        <p className="text">
            We take all necessary measures to protect your personal information from unauthorized access, alteration, or destruction. Your data is stored on secure servers using modern encryption methods.
        </p>
    </div>

    <div className="flex flex-col gap-4 ">
        <h2 className="title-2 ">Third-Party Data Sharing</h2>
        <p className="text">
            We do not share your data with third parties without your consent, except as required by law or when necessary to provide our services (e.g., working with payment systems).
        </p>
    </div>

    <div className="flex flex-col gap-4 ">
        <h2 className="title-2">Cookies</h2>
        <p className="text">Our website uses cookies to:</p>
        <ul className="flex flex-col gap-3">
            <li className="text relative items-start before:w-2 before:min-w-2 before:h-2 before:bg-grey-dark before:rounded-full before:block before:mt-2 flex gap-2">
                Remember your preferences.
            </li>
            <li className="text relative items-start before:w-2 before:min-w-2 before:h-2 before:bg-grey-dark before:rounded-full before:block before:mt-2 flex gap-2">
                Collect anonymous statistics to improve the website.
            </li>
        </ul>
        <p className="text">
            You can manage cookie settings through your browser, but this may limit the functionality of the website.
        </p>
    </div>

    <div className="flex flex-col gap-4 ">
        <h2 className="title-2">Your Rights</h2>
        <p className="text">You have the right to:</p>
        <ul className="flex flex-col gap-3">
            <li className="text relative items-start before:w-2 before:min-w-2 before:h-2 before:bg-grey-dark before:rounded-full before:block before:mt-2 flex gap-2">
                Know what data we collect about you.
            </li>
            <li className="text relative items-start before:w-2 before:min-w-2 before:h-2 before:bg-grey-dark before:rounded-full before:block before:mt-2 flex gap-2">
                Correct, delete, or limit the use of your data.
            </li>
            <li className="text relative items-start before:w-2 before:min-w-2 before:h-2 before:bg-grey-dark before:rounded-full before:block before:mt-2 flex gap-2">
                Withdraw your consent for data use at any time.
            </li>
        </ul>
        <p className="text">To exercise your rights, please contact us using the details provided on the website.</p>
    </div>

    <div className="flex flex-col gap-4 ">
        <h2 className="title-2">Changes to the Privacy Policy</h2>
        <p className="text">
            We reserve the right to update this privacy policy. Changes will be posted on this page, and we recommend reviewing it periodically for updates.
        </p>
    </div>
</section>

        </main>
    )
}

export default Page