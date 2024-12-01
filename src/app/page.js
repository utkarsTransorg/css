import Image from "next/image";
import logo from "../assets/asset0.png";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";
import Card from "@/components/Card";

const arr = [
  {
    title: "Native Notifications",
    image: i1,
  },

  {
    title: "Native Notifications",
    description:
      "We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.",
    image: i3,
  },
  {
    title: "Native Notifications",
    image: i2,
  },
  {
    title: "Native Notifications",
    description:
      "We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.",
    image: i4,
  },
  {
    title: "Native Notifications1",
    image: i1,
  },

  {
    title: "Native Notificationsz",
    description:
      "We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.",
    image: i3,
  },
];

function generateStartRow(index) {
  if(index - 3 >= 0 ) {
    const ind = index-3;
    if(arr[ind].description) {

      return [index + 6,index + 6 + (arr[index].description ? 6 : 3)]
    } 

    return [index + 3, index + 3 +  (arr[index].description ? 6 : 3) ]
  }

  return [1,  (arr[index].description ? 6 : 3)]
}



export default function Home() {
  return (
    
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-white"></div>

      <div className="bg-white pb-10">
        <div style={{gridAutoRows: '96px'}} className="grid grid-cols-1 md:grid-cols-3 w-[85%] mx-auto gap-5">
          {arr.map((element, ind) => (
            <Card className={` text-black bg-slate-100 border-slate-200 border-[1px] ${element.description ? 'row-span-3' : 'row-span-2'} `}  key={ind} {...element} />
          ))}
        </div>
      </div>
    </>
  );
}
