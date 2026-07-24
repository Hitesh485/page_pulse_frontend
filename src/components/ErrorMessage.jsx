function ErrorMessage({ message }) {
    return (
        <div className="mt-6 rounded-lg bg-red-100 border border-red-300 p-4 text-red-700">
            {message}
        </div>
    );
}

export default ErrorMessage;