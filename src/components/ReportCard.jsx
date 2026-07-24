function ReportCard({ report }) {

    const reportItems = [
        {
            label: "HTTP Status",
            value: report.status
        },
        {
            label: "Response Time",
            value: `${report.responseTime} ms`
        },
        {
            label: "Page Title",
            value: report.title || "N/A"
        },
        {
            label: "Meta Description",
            value: report.metaDescription || "Not Available"
        },
        {
            label: "H1 Count",
            value: report.h1Count
        },
        {
            label: "Images Missing Alt",
            value: report.missingAltImages
        },
        {
            label: "Word Count",
            value: report.wordCount
        }
    ];

    return (
        <div className="mt-8 rounded-xl border border-gray-200 bg-white shadow-md">

            <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-2xl font-bold text-gray-800">
                    Audit Report
                </h2>
            </div>

            <div className="divide-y divide-gray-200">

                {reportItems.map((item) => (
                    <div
                        key={item.label}
                        className="flex justify-between items-center px-6 py-4"
                    >
                        <span className="font-medium text-gray-600">
                            {item.label}
                        </span>

                        <span className="text-gray-900 font-semibold text-right max-w-md break-words">
                            {item.value}
                        </span>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default ReportCard;