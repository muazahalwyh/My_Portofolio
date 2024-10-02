/* eslint-disable react/no-unescaped-entities */
import admin from "../assets/Certificate/admin.jpg";
import bnsp from "../assets/Certificate/bnsp.jpg";
import cyber from "../assets/Certificate/cyber.jpg";
import micro from "../assets/Certificate/micro.jpg";
import pkw from "../assets/Certificate/pkw.jpg";
import dicoding from "../assets/Certificate/dicoding.jpg";

export default function Awards() {
  return (
    <>
      <div className="container mx-auto my-10 p-8">
        <div className="text-center p-4">
          <h1 className="text-xl font-bold my-6">
            ACHIEVEMENTS & CERTIFICATIONS
          </h1>
          <h1 className="text-3xl font-serif italic">
            <span className="text-amber-500"> Certified  </span> and
            <span className="text-amber-500"> Accomplished  </span>
          </h1>
          <hr className="mt-4 mx-auto border-b-4 rounded-xl w-24 border-amber-700" />
        </div>

        <div className="flex-row md:flex gap-4 md:p-0 p-6 my-10 shadow-xl">
          <div className="grid grid-cols-3 gap-2 p-4">
            <img src={bnsp} alt="bnsp graphic design" className="w-52 md:w-80 h-52" />
            <img src={micro} alt="microsoft" className="w-52 md:w-80 h-52" />
            <img src={cyber} alt="cyber" className="w-52 md:w-80 h-52" />
            <img src={admin} alt="admin set" className="w-40 md:w-w-80 h-28" />
            <img src={dicoding} alt="sap" className="w-40 md:w-w-80 h-28" />
            <img src={pkw} alt="pkw" className="w-40 md:w-w-80 h-28" />
          </div>
          
          <div className="justify-center items-center w-full">
            <div className="justify-end p-6">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Tittle Certificate</th>
                      <th>From</th>
                      <th>Years</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className="text-xs">
                      <th>1</th>
                      <td>Junior Graphic Design</td>
                      <td>VSGA x DTS KOMINFO</td>
                      <td>2021</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="text-xs">
                      <th>2</th>
                      <td>Microsoft Excel dan Word 2016</td>
                      <td>STEPHEN KOMPUTER</td>
                      <td>2022</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="text-xs">
                      <th>3</th>
                      <td>Front-End Web dan React</td>
                      <td>SIB KAMPUS MERDEKA X PT.PRESENTOLOGICS </td>
                      <td>2022</td>
                    </tr>
                    <tr className="text-xs">
                      <th>4</th>
                      <td>Cyber Security</td>
                      <td>WOMEN TECH DTS</td>
                      <td>2023</td>
                    </tr>
                    <tr className="text-xs">
                      <th>5</th>
                      <td>Admin Super Set</td>
                      <td>WOMEN TECH DTS - SALESFORCE</td>
                      <td>2023</td>
                    </tr>
                    <tr className="text-xs">
                      <th>6</th>
                      <td>PKW "Graphic Design"</td>
                      <td>LKP VIA KOMPUTER JAMBI</td>
                      <td>2024</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}