export default function Experience() {
  return (
    <>
      <div className="container mx-auto p-8">
        <div className="text-center p-4 mb-14">
          <h1 className="text-xl font-bold my-6">
            EXPERIENCE
          </h1>
          <h1 className="text-3xl font-serif italic">
            Building My <span className="text-amber-500"> Journey  </span>
          </h1>
          <hr className="mt-4 mx-auto border-b-4 rounded-xl w-24 border-amber-700" />
        </div>

        <div className="relative w-full py-10 p-10">
          {/* Garis horizontal */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-amber-700 transform -translate-y-1/2"></div>

          <div className="flex justify-between items-center">
            <div className="relative text-center w-1/4">
              {/* Bulat titik perjalanan */}
              <div className="w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center mx-auto z-10">
                1
              </div>

              {/* Garis penghubung di antara lingkaran */}
              <div className="absolute top-1/2 left-full w-1/2 h-1 bg-amber-700 transform -translate-y-1/2"></div>

              {/* Text untuk setiap langkah */}
              <div className="md:mt-0 mt-4">
                  <h4 className="font-bold md:text-base text-xs py-2 md:py-0">Front-End Web Developer</h4>
                  <p className="md:text-sm text-xs">SIB Kampus Merdeka x Dicoding Indonesia</p>
                  <p className="text-xs mt-2">Agustus - Januari 2023</p>
              </div>
            </div>         

            <div className="relative text-center w-1/4">
              {/* Bulat titik perjalanan */}
              <div className="w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center mx-auto z-10">
                2
              </div>

              {/* Garis penghubung di antara lingkaran */}
              <div className="absolute top-1/2 left-full w-1/2 h-1 bg-amber-700 transform -translate-y-1/2"></div>

              {/* Text untuk setiap langkah */}
              <div className="mt-0">
                <h4 className="font-bold md:text-base text-xs py-4 md:py-0">Junior Graphic Design</h4>
                <p className="md:text-sm text-xs py-2 md:py-0">Pelatihan PKW LKP Via Komputer Jambi</p>
                <p className="text-xs mt-2">Mei - Juli 2024</p>
              </div>
            </div>

            <div className="relative text-center w-1/4">
              {/* Bulat titik perjalanan */}
              <div className="w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center mx-auto z-10">
                3
              </div>

              {/* Text untuk setiap langkah */}
              <div className="mt-0">
                <h4 className="font-bold md:text-base text-xs py-3 md:py-0">Sekretaris</h4>
                <p className="md:text-sm text-xs py-1 md:py-0">Sinar Grafika- Usaha Kecil yang baru berjalan sejak </p>
                <p className="text-xs mt-2">Agustus 2024 </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}