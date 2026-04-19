const Page = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Main Content Section */}
            <div className="flex-grow flex items-center justify-center p-8">
                <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome to the Page!</h1>
                    <p className="text-lg text-gray-600 mb-4">
                        This is a simple page layout without a navigation bar or footer.
                        You can add your content here. Use Tailwind CSS utilities to style
                        this page and customize it as needed.
                    </p>
                    <div className="flex justify-center">
                        <button className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
                            Call to Action
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;