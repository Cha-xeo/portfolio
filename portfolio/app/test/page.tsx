export default function Page() {
    return (
        <div className="h-[calc(100vh-4rem)] snap-y snap-mandatory overflow-y-scroll">
            {/* Section 1 */}
            <section className="h-[calc(100vh-4rem)] snap-start flex items-center justify-center bg-gray-100">
                <h1 className="text-3xl font-bold">Section 1: My academic background includes</h1>
            </section>

            {/* Section 2 */}
            <section className="h-[calc(100vh-4rem)] snap-start flex items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Section 2: University Info</h1>
                </div>
            </section>

            {/* Section 3 */}
            <section className="h-[calc(100vh-4rem)] snap-start flex items-center justify-center bg-gray-200">
                <h1 className="text-3xl font-bold">Section 3: Another Section</h1>
            </section>
      </div>
  );
}