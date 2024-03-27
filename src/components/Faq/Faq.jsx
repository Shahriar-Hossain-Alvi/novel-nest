const Faq = () => {
    return (
        <div className="mb-32">
            <h2 className="font-playfair font-medium text-center my-8 text-5xl">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-4">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What is Novel Nest?
                    </div>
                    <div className="collapse-content">
                        <p>Novel Nest is an online platform for reading and discovering new books. We offer a vast library of ebooks and audiobooks for you to explore.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Do I need to create an account to use Novel Nest?
                    </div>
                    <div className="collapse-content">
                        <p>While you can browse our catalog without an account, creating a free account allows you to track your reading progress, create personalized recommendations, and save books for later.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What kind of books does Novel Nest offer?
                    </div>
                    <div className="collapse-content">
                        <p>Novel Nest offers a wide variety of genres, including fiction, non-fiction, classics, contemporary bestsellers, and more. We are constantly expanding our library to cater to all reading interests.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Are there any fees involved?
                    </div>
                    <div className="collapse-content">
                        <p>Novel Nest offers a free tier with access to a curated selection of books. We also have a premium membership option that unlocks unlimited access to our entire library and additional features.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How do I access ebooks on Novel Nest?
                    </div>
                    <div className="collapse-content">
                        <p>Once you find a book you would like to read, you can access it directly through your web browser on any device. We also offer mobile apps for Android and iOS for on-the-go reading.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Does Novel Nest offer audiobooks?
                    </div>
                    <div className="collapse-content">
                        <p>Yes! We have a growing collection of audiobooks for those who prefer listening to their stories. You can seamlessly switch between ebook and audiobook versions within the platform.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I leave reviews for the books I have read?
                    </div>
                    <div className="collapse-content">
                        <p>Absolutely! We encourage user participation and value your opinion. You can leave reviews and ratings for books you have finished, helping others discover great reads.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How do I find books I will enjoy?
                    </div>
                    <div className="collapse-content">
                        <p>Novel Nest offers advanced search filters by genre, author, publication date, and other criteria. We also personalize recommendations based on your reading history and user reviews.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;