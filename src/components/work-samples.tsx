export default function WorkSamples() {
  const samples = [
    {
      slug: "change-i-want-to-make",
      title: "The Change I Want to Make",
      description:
        "A reflective essay on Nigeria's student intellectualism and national progress.",
      downloadUrl: "samples/the-change-i-want-to-make.docx",
    },
    {
      slug: "innovative-social-initiative",
      title: "Innovative Social Initiative",
      description:
        "An analytical piece proposing CSR-driven solutions to youth unemployment and social change.",
      downloadUrl: "samples/innovative-social-initiatives.docx",
    },
  ];
  return (
    <>
      <section className="py-20">
        <h2
          data-aos="fade-right"
          className="pl-[2%] text-[22px] md:text-[30px]"
        >
          Work Samples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-[5%] pt-5">
          {samples.map((sample) => (
            <div
              key={sample.slug}
              data-aos="fade-up"
              className="bg-white p-3 pb-5 md:p-6 rounded shadow-md border border-gray-200"
            >
              <h3 className="font-poppins text-lg mb-2">{sample.title}</h3>
              <p className="text-gray-600 text-sm mb-5">{sample.description}</p>
              <a
                href={sample.downloadUrl}
                download
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-5 md:px-7 py-2.5 md:py-3.5 w-fit mb-3"
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
