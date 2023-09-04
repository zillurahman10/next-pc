import RootLayout from "@/components/Layout/RootLayout"
import Banner from "@/components/UI/Carousel";
import ComponentCard from "@/components/UI/ComponentCard";
import FeaturedCard from "@/components/UI/FeaturedCard";

function Home({ components, featured }) {
  return (
    <div>
      {/* Banner section */}
      <Banner></Banner>

      {/* Featured Products Section  */}

      <div className="mt-12">
        <h1 className="text-2xl text-center mt-12">Featured Product</h1>
        <p className="text-center">Checkout our featured products</p>
        <div className="flex justify-center items-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
              components.data.slice(0, 6).map(product => <ComponentCard key={product?._id} product={product}></ComponentCard>)
            }
          </div>
        </div>
      </div>

      {/* Featured section */}
      <div>
        <h1 className="text-2xl text-center m-12">Featured Catagory</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-[-6px]">
          {
            featured.map(card => <FeaturedCard key={card?._id} info={card}></FeaturedCard>)
          }
        </div>
      </div>
    </div>
  )
}

export default Home;

Home.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/components")
  const featuredResult = await fetch("http://localhost:5000/featured")
  const featured = await featuredResult.json()
  const data = await res.json()
  return {
    props: {
      components: data,
      featured: featured
    }
  }
}



const cpu = [
  {
    img: 'https://www.startech.com.bd/image/cache/catalog/processor/Intel/i3-10100/i3-10100-500x500.jpg',
    name: 'Intel 10th Gen Core i3 10100 Processor',
    category: 'CPU/Processor',
    status: 'In Stock',
    price: '11,800৳',
    spec: [
      {
        infoName: 'Base Frequency',
        infoDetails: '3.60 GHz'
      },
      {
        infoName: 'Maximum Turbo Frequency',
        infoDetails: '4.30 GHz'
      },
      {
        infoName: 'Cache',
        infoDetails: '6 MB SmartCache'
      },
      {
        infoName: 'Cores',
        infoDetails: '4'
      },
      {
        infoName: 'Threads',
        infoDetails: '8'
      },
      {
        infoName: 'Default TDP',
        infoDetails: '65 W'
      }
    ],
    keyFeatures: [
      {
        title: 'Brand',
        details: 'Intel'
      },
      {
        title: 'Model',
        details: 'Intel Core i3 10100'
      }
    ],
    individualRating: '4 out of 5',
    AvarageRating: '3.5 out of 5',
    review: [
      {
        name: 'John Smith',
        review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
      },
      {
        name: 'Alex Kalvin',
        review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
      },
      {
        name: 'Jonny English',
        review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
      },
    ]
  },
  {
    img: 'https://www.startech.com.bd/image/cache/catalog/processor/Intel/i3-10100/i3-10100-500x500.jpg',
    name: 'Intel 10th Gen Core i3 10100 Processor',
    category: 'CPU/Processor',
    status: 'In Stock',
    price: '11,800৳',
    spec: [
      {
        infoName: 'Base Frequency',
        infoDetails: '3.60 GHz'
      },
      {
        infoName: 'Maximum Turbo Frequency',
        infoDetails: '4.30 GHz'
      },
      {
        infoName: 'Cache',
        infoDetails: '6 MB SmartCache'
      },
      {
        infoName: 'Cores',
        infoDetails: '4'
      },
      {
        infoName: 'Threads',
        infoDetails: '8'
      },
      {
        infoName: 'Default TDP',
        infoDetails: '65 W'
      }
    ],
    keyFeatures: [
      {
        title: 'Brand',
        details: 'Intel'
      },
      {
        title: 'Model',
        details: 'Intel Core i3 10100'
      }
    ],
    individualRating: '4 out of 5',
    AvarageRating: '3.5 out of 5',
    review: [
      {
        name: 'John Smith',
        review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
      },
      {
        name: 'Alex Kalvin',
        review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
      },
      {
        name: 'Jonny English',
        review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
      },
    ]
  },
  {
    img: 'https://www.startech.com.bd/image/cache/catalog/processor/Intel/i3-10100/i3-10100-500x500.jpg',
    name: 'Intel 10th Gen Core i3 10100 Processor',
    category: 'CPU/Processor',
    status: 'In Stock',
    price: '11,800৳',
    spec: [
      {
        infoName: 'Base Frequency',
        infoDetails: '3.60 GHz'
      },
      {
        infoName: 'Maximum Turbo Frequency',
        infoDetails: '4.30 GHz'
      },
      {
        infoName: 'Cache',
        infoDetails: '6 MB SmartCache'
      },
      {
        infoName: 'Cores',
        infoDetails: '4'
      },
      {
        infoName: 'Threads',
        infoDetails: '8'
      },
      {
        infoName: 'Default TDP',
        infoDetails: '65 W'
      }
    ],
    keyFeatures: [
      {
        title: 'Brand',
        details: 'Intel'
      },
      {
        title: 'Model',
        details: 'Intel Core i3 10100'
      }
    ],
    individualRating: '4 out of 5',
    AvarageRating: '3.5 out of 5',
    review: [
      {
        name: 'John Smith',
        review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
      },
      {
        name: 'Alex Kalvin',
        review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
      },
      {
        name: 'Jonny English',
        review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
      },
    ]
  },
]

// const motherboard = [
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/motherboard/gigabyte/ga-h81m-ds2/ga-h81m-ds2-1-500x500.jpg',
//       name: 'Gigabyte GA-H81M-DS2 Micro ATX Motherboard',
//       category: 'Motherboard',
//       status: 'In Stock',
//       price: '7,800৳',
//       spec: [

//           {
//               infoName: 'Supported CPU',
//               infoDetails: 'Support for Intel® Core™ i7 processors/Intel® Core™ i5 processors/Intel® Core™ i3 processors/Intel® Pentium® processors/Intel® Celeron® processors in the LGA1150 package L3 cache varies with CPU'
//           },
//           {
//               infoName: 'Chipset',
//               infoDetails: 'Intel® H81 Express'
//           },
//           {
//               infoName: 'BIOS',
//               infoDetails: '2 x 64 Mbit flash Use of licensed AMI EFI BIOS Support for DualBIOS™ PnP 1.0a, DMI 2.7, WfM 2.0, SM BIOS 2.7, ACPI 5.0'
//           },
//           {
//               infoName: 'Form Factor',
//               infoDetails: 'Micro ATX Form Factor; 22.6cm x 17cm'
//           }

//       ],
//       keyFeatures: [
//           {
//               title: 'Brand',
//               details: 'GIGABYTE'
//           },
//           {
//               title: 'Model',
//               details: 'GA-H81M-DS2'
//           },
//           {
//               title: 'CPU',
//               details: '4th Generation Intel Processors'
//           },
//           {
//               title: 'Chipset',
//               details: 'Intel H81 Express'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/motherboard/asrock/h81m-vg4-r4-0/h81m-vg4-r4-0-01-500x500.jpg',
//       name: 'ASRock H81M-VG4 R4.0 4th Gen Micro ATX Motherboard',
//       category: 'Motherboard',
//       status: 'In Stock',
//       price: '8,000৳',
//       spec: [
//           {
//               infoName: 'Supported CPU',
//               infoDetails: 'Supports New 4th and 4th Generation Intel Core i7/i5/i3/Xeon/Pentium/Celeron Processors (Socket 1150) Supports Intel Turbo Boost 2.0 Technology'
//           },
//           {
//               infoName: 'Chipset',
//               infoDetails: 'Intel H81'
//           },
//           {
//               infoName: 'BIOS',
//               infoDetails: '32Mb AMI UEFI Legal BIOS with multilingual GUI support ACPI 1.1 Compliant wake up events SMBIOS 2.3.1 support CPU, DRAM Voltage multi-adjustment'
//           },
//           {
//               infoName: 'Form Factor',
//               infoDetails: 'Micro ATX Form Factor: 7.5-in x 6.7-in, 19.1 cm x 17.0 cm Solid Capacitor design'
//           },
//           {
//               infoName: 'Audio',
//               infoDetails: '7.1 CH HD Audio (Realtek ALC887/897 Audio Codec) Supports Surge Protection'
//           }

//       ],
//       keyFeatures: [
//           {
//               title: 'Brand',
//               details: 'ASRock'
//           },
//           {
//               title: 'Model',
//               details: 'H81M-VG4 R4.0'
//           },
//           {
//               title: 'Supports',
//               details: '4th Generation Intel Core Processors (Socket 1150)'
//           },
//           {
//               title: 'Supports',
//               details: 'Dual Channel DDR3 1600'
//           },
//           {
//               title: 'Graphic Output',
//               details: 'D-Sub'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/motherboard/asus/ex-h310m-v3/ex-h310m-v3-1-500x500.jpg',
//       name: 'Asus EX-H310M-V3 8th Gen Micro-ATX Motherboard',
//       category: 'Motherboard',
//       status: 'In Stock',
//       price: '9,000৳',
//       spec: [
//           {
//               infoName: 'Supported CPU',
//               infoDetails: 'Intel® Socket 1151 for 8th Generation Core™ i7/Core™ i5/Core™ i3/Pentium®/Celeron® Processors Supports Intel® 14 nm CPU Supports Intel® Turbo Boost Technology 2.0 * The Intel® Turbo Boost Technology 2.0 support depends on the CPU types.'
//           },
//           {
//               infoName: 'Chipset',
//               infoDetails: 'Intel® H310'
//           },
//           {
//               infoName: 'Form Factor',
//               infoDetails: 'uATX Form Factor 8.9 inch x 7.0 inch ( 22.6 cm x 17.8 cm )'
//           }

//       ],
//       keyFeatures: [
//           {
//               title: 'Brand',
//               details: 'Asus'
//           },
//           {
//               title: 'Model',
//               details: 'EX-H310M-V3'
//           },
//           {
//               title: 'CPU',
//               details: '8th Generation Intel Processors'
//           },
//           {
//               title: 'Chipset',
//               details: 'Intel H310'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
// ]

// const ram = [
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/ram/apacer/nox-16gb-3600mhz/Nox-16gb-3200mhz.jpg-1000x1000-500x500.jpg',
//       name: 'Apacer NOX RGB 16GB DDR4 3600MHz RAM',
//       category: 'Ram',
//       status: 'In Stock',
//       price: '8,500৳',
//       spec: [
//           {
//               infoName: 'Type',
//               infoDetails: 'DDR4'
//           },
//           {
//               infoName: 'Capacity',
//               infoDetails: '16GB'
//           },
//           {
//               infoName: 'Frequency',
//               infoDetails: '3600MHz'
//           },
//           {
//               infoName: 'Operating voltage',
//               infoDetails: '1.35V'
//           },
//           {
//               infoName: 'Latency',
//               infoDetails: '18-22-22-38'
//           }

//       ],
//       keyFeatures: [
//           {
//               title: 'Brand',
//               details: 'Apacer'
//           },
//           {
//               title: 'Model',
//               details: 'NOX 16GB 3600MHz'
//           },
//           {
//               title: 'Capacity',
//               details: '16GB, RGB lighting effect'
//           },
//           {
//               title: 'Frequency',
//               details: '3600MHz, PIN: 288-pin'
//           },
//           {
//               title: 'Memory Architecture',
//               details: 'x8 FBGA DRAM chip'
//           },
//           {
//               title: 'Voltage & Cas Latency',
//               details: '1.45V/18-22-22-38'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/ram/apacer/panther-rage-16gb-ddr4-2666mhz/-panther-rage-16gb-ddr4-2666mhz-01-500x500.jpg',
//       name: 'Apacer Panther Rage 16GB DDR4 RGB 2666MHZ Desktop RAM',
//       category: 'Ram',
//       status: 'In Stock',
//       price: '8,400৳',
//       spec: [
//           {
//               infoName: 'Type',
//               infoDetails: 'DDR4'
//           },
//           {
//               infoName: 'Capacity',
//               infoDetails: '16GB'
//           },
//           {
//               infoName: 'Frequency',
//               infoDetails: '2666MHz'
//           },
//           {
//               infoName: 'Operating voltage',
//               infoDetails: '1.2V'
//           },
//           {
//               infoName: 'Latency',
//               infoDetails: '16-18-18-38'
//           }

//       ],
//       keyFeatures: [
//           {
//               title: 'Brand',
//               details: 'Apacer'
//           },
//           {
//               title: 'Model',
//               details: 'Panther Rage DDR4 RGB 2666MHZ'
//           },
//           {
//               title: 'Capacity',
//               details: '16GB, RGB lighting effect'
//           },
//           {
//               title: 'Frequency',
//               details: '2666MHz, PIN: 288-pin'
//           },
//           {
//               title: 'Memory Architecture',
//               details: 'x8 FBGA DRAM chip'
//           },
//           {
//               title: 'Voltage & Cas Latency',
//               details: '1.2V/16-18-18-38'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/ram/cosair/vengeance-rgb-pro-ram-kit-white/vengeance-rgb-pro-ram-kit-white-01-500x500.jpg',
//       name: 'Corsair VENGEANCE RGB PRO 16GB (2 x 8GB) DDR4 3200MHz C16 RAM Kit White',
//       category: 'Ram',
//       status: 'In Stock',
//       price: '7,900৳',
//       spec: [
//           {
//               infoName: 'Type',
//               infoDetails: 'DDR4'
//           },
//           {
//               infoName: 'Capacity',
//               infoDetails: 'Memory Size 16GB (2 x 8GB)'
//           },
//           {
//               infoName: 'Frequency',
//               infoDetails: '3200MHz'
//           },
//           {
//               infoName: 'Operating voltage',
//               infoDetails: 'Tested Voltage 1.35'
//           },
//           {
//               infoName: 'Latency',
//               infoDetails: 'Tested Latency 16-18-18-36 SPD Latency 15-15-15-36'
//           }

//       ],
//       keyFeatures: [
//           {
//               title: 'Brand',
//               details: 'Corsair'
//           },
//           {
//               title: 'Model',
//               details: 'CMW16GX4M2C3200C16W'
//           },
//           {
//               title: 'Memory Type',
//               details: 'DDR4'
//           },
//           {
//               title: 'Memory Size',
//               details: '16GB (2 x 8GB)'
//           },
//           {
//               title: 'Number of Pins',
//               details: '288 Pin'
//           },
//           {
//               title: 'Latency',
//               details: '16-18-18-36'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
// ]

// const powerSupply = [
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/power-supply/antec/csk-550w/csk-550w-01-500x500.jpg',
//       name: 'Antec CUPRUM STRIKE CSK 550W 80 Plus Bronze Power Supply',
//       category: 'Power-Supply',
//       status: 'In Stock',
//       price: '5,300৳',
//       spec: [
//           {
//               infoName: 'Continuous Power',
//               infoDetails: '550W'
//           },
//           {
//               infoName: 'Efficiency (Approx.)',
//               infoDetails: '88% Typically'
//           },
//           {
//               infoName: 'Certification',
//               infoDetails: '80 Plus Bronze'
//           },
//           {
//               infoName: 'Fan Size',
//               infoDetails: '120mm Silence Fan'
//           },
//           {
//               infoName: 'Others',
//               infoDetails: 'PFC: Active PFC Power Good Signal: 100 ~ 500ms Protection: OVP / UVP / SCP / OPP / NLO / OTP Regulatory: cTUVus / TUV / CB / RCM / CE / CCC / FCC'
//           }

//       ],
//       keyFeatures: [
//           {
//               title: 'MPN',
//               details: 'X5000A253HC-20'
//           },
//           {
//               title: 'Model',
//               details: 'CUPRUM STRIKE CSK 550W'
//           },
//           {
//               title: 'Continuous Power',
//               details: '550W'
//           },
//           {
//               title: 'Certification',
//               details: '80 PLUS Bronze'
//           },
//           {
//               title: 'Fan size',
//               details: '120 mm Silent Fan'
//           },
//           {
//               title: 'Type',
//               details: 'ATX 12V 2.31'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/power-supply/gamdias/kratos-m1-750b/kratos-m1-750b-01-500x500.jpg',
//       name: 'Gamdias Kratos M1-750B 750W 80 Plus Bronze ARGB Power Supply',
//       category: 'Power-Supply',
//       status: 'In Stock',
//       price: '6,100৳',
//       spec: [
//           {
//               infoName: 'Continuous Power',
//               infoDetails: '550W'
//           },
//           {
//               infoName: 'Efficiency (Approx.)',
//               infoDetails: '88% Typically'
//           },
//           {
//               infoName: 'Certification',
//               infoDetails: '80 Plus Bronze'
//           },
//           {
//               infoName: 'Fan Size',
//               infoDetails: '120mm Silence Fan'
//           },
//           {
//               infoName: 'Others',
//               infoDetails: 'PFC: Active PFC Power Good Signal: 100 ~ 500ms Protection: OVP / UVP / SCP / OPP / NLO / OTP Regulatory: cTUVus / TUV / CB / RCM / CE / CCC / FCC'
//           }

//       ],
//       keyFeatures: [
//           {
//               title: 'MPN',
//               details: 'X5000A253HC-20'
//           },
//           {
//               title: 'Model',
//               details: 'M1-750B'
//           },
//           {
//               title: 'Continuous Power',
//               details: '550W'
//           },
//           {
//               title: 'Certification',
//               details: '80 PLUS Bronze'
//           },
//           {
//               title: 'Fan size',
//               details: '120 mm Silent Fan'
//           },
//           {
//               title: 'Type',
//               details: 'ATX 12V 2.31'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/power-supply/gigabyte/p450b/p450b-500x500.jpg',
//       name: 'Gigabyte P450B 450W 80 Plus Bronze Certified Power Supply',
//       category: 'Power-Supply',
//       status: 'In Stock',
//       price: '3,600৳',
//       spec: [
//           {
//               infoName: 'Continuous Power',
//               infoDetails: '550W'
//           },
//           {
//               infoName: 'Efficiency (Approx.)',
//               infoDetails: '88% Typically'
//           },
//           {
//               infoName: 'Certification',
//               infoDetails: '80 Plus Bronze'
//           },
//           {
//               infoName: 'Fan Size',
//               infoDetails: '120mm Silence Fan'
//           },
//           {
//               infoName: 'Others',
//               infoDetails: 'PFC: Active PFC Power Good Signal: 100 ~ 500ms Protection: OVP / UVP / SCP / OPP / NLO / OTP Regulatory: cTUVus / TUV / CB / RCM / CE / CCC / FCC'
//           }

//       ],
//       keyFeatures: [
//           {
//               title: 'MPN',
//               details: 'GP-P450B/PSU 450W/80+B'
//           },
//           {
//               title: 'Model',
//               details: 'Gigabyte P450B'
//           },
//           {
//               title: 'Continuous Power',
//               details: '550W'
//           },
//           {
//               title: 'Certification',
//               details: '80 PLUS Bronze'
//           },
//           {
//               title: 'Fan size',
//               details: '120 mm Silent Fan'
//           },
//           {
//               title: 'Type',
//               details: 'ATX 12V 2.31'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },

// ]

// const storage = [
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/ssd/kingston/a400-sata3-120gb/kingston-a400-120gb-2-5-inch-sata-3-internal-ssd-01-500x500.jpg',
//       name: 'Kingston A400 120GB 2.5 inch SATA 3 Internal SSD',
//       category: 'Storage',
//       status: 'In Stock',
//       price: '1,599৳',
//       spec: [
//           {
//               infoName: 'Capacity',
//               infoDetails: '120 GB'
//           },
//           {
//               infoName: 'Form Factor',
//               infoDetails: '2.5 Inch'
//           },
//           {
//               infoName: 'Flash Type',
//               infoDetails: '3D NAND'
//           },
//           {
//               infoName: 'Interface',
//               infoDetails: 'SATA Rev. 3.0 (6Gb/s) – with backwards compatibility to SATA Rev. 2.0 (3Gb/s)'
//           },
//           {
//               infoName: 'Sequential R/W',
//               infoDetails: '500MB/s read, 320MB/s write'
//           },
//           {
//               infoName: 'MTBF',
//               infoDetails: '1 million hours'
//           }

//       ],
//       keyFeatures: [
//           {
//               title: 'MPN',
//               details: 'SA400S37/120G'
//           },
//           {
//               title: 'Model',
//               details: 'A400 120GB 2.5 inch SATA 3 Internal SSD'
//           },
//           {
//               title: 'SATA Rev',
//               details: '3.0 Internal SSD'
//           },
//           {
//               title: 'Up to',
//               details: '500 MB/s Read Speed'
//           },
//           {
//               title: 'Up to',
//               details: '320 MB/s Write Speed'
//           },
//           {
//               title: 'Others',
//               details: 'Faster than a HDD'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/ssd/twinmos/alphapro-128gb/alphapro-128gb-500x500.png',
//       name: 'TwinMOS AlphaPro 128GB NVMe M.2 2280 SSD',
//       category: 'Storage',
//       status: 'In Stock',
//       price: '1,600৳',
//       spec: [
//           {
//               infoName: 'Capacity',
//               infoDetails: '120 GB'
//           },
//           {
//               infoName: 'Form Factor',
//               infoDetails: '2.5 Inch'
//           },
//           {
//               infoName: 'Flash Type',
//               infoDetails: '3D NAND'
//           },
//           {
//               infoName: 'Interface',
//               infoDetails: 'SATA Rev. 3.0 (6Gb/s) – with backwards compatibility to SATA Rev. 2.0 (3Gb/s)'
//           },
//           {
//               infoName: 'Sequential R/W',
//               infoDetails: '500MB/s read, 320MB/s write'
//           },
//           {
//               infoName: 'MTBF',
//               infoDetails: '1 million hours'
//           }

//       ],
//       keyFeatures: [
//           {
//               title: 'MPN',
//               details: 'SA400S37/120G'
//           },
//           {
//               title: 'Model',
//               details: 'A400 120GB 2.5 inch SATA 3 Internal SSD'
//           },
//           {
//               title: 'SATA Rev',
//               details: '3.0 Internal SSD'
//           },
//           {
//               title: 'Up to',
//               details: '500 MB/s Read Speed'
//           },
//           {
//               title: 'Up to',
//               details: '320 MB/s Write Speed'
//           },
//           {
//               title: 'Others',
//               details: 'Faster than a HDD'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/ssd/kingston/kc2500/kc2500-01-500x500.jpg',
//       name: 'Kingston KC2500 250GB PCIe 4.0 NVMe M.2 SSD',
//       category: 'Power-Supply',
//       status: 'In Stock',
//       price: '4,300৳',
//       spec: [
//           {
//               infoName: 'Capacity',
//               infoDetails: '120 GB'
//           },
//           {
//               infoName: 'Form Factor',
//               infoDetails: '2.5 Inch'
//           },
//           {
//               infoName: 'Flash Type',
//               infoDetails: '3D NAND'
//           },
//           {
//               infoName: 'Interface',
//               infoDetails: 'SATA Rev. 3.0 (6Gb/s) – with backwards compatibility to SATA Rev. 2.0 (3Gb/s)'
//           },
//           {
//               infoName: 'Sequential R/W',
//               infoDetails: '500MB/s read, 320MB/s write'
//           },
//           {
//               infoName: 'MTBF',
//               infoDetails: '1 million hours'
//           }

//       ],
//       keyFeatures: [
//           {
//               title: 'MPN',
//               details: 'SA400S37/120G'
//           },
//           {
//               title: 'Model',
//               details: 'A400 120GB 2.5 inch SATA 3 Internal SSD'
//           },
//           {
//               title: 'SATA Rev',
//               details: '3.0 Internal SSD'
//           },
//           {
//               title: 'Up to',
//               details: '500 MB/s Read Speed'
//           },
//           {
//               title: 'Up to',
//               details: '320 MB/s Write Speed'
//           },
//           {
//               title: 'Others',
//               details: 'Faster than a HDD'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
// ]

// const monitor = [
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/monitor/msi/g24c6/g24c6-01-500x500.jpg',
//       name: 'MSI Optix G24C6 23.8" 144hz Curved Freesync Gaming Monitor',
//       category: 'Monitor',
//       status: 'In Stock',
//       price: '13,599৳',
//       spec: [
//           {
//               infoName: 'Display Size',
//               infoDetails: '23.6 Inch'
//           },
//           {
//               infoName: 'Display Type',
//               infoDetails: 'LED'
//           },
//           {
//               infoName: 'Panel Type',
//               infoDetails: 'VA'
//           },
//           {
//               infoName: 'Resolution',
//               infoDetails: 'FHD (1920 x 1080)'
//           },
//           {
//               infoName: 'Pixel pitch(MM)',
//               infoDetails: '0.27156(H) x 0.27156(V)'
//           },
//           {
//               infoName: 'Display Surface',
//               infoDetails: 'Anti-glare'
//           },
//           {
//               infoName: 'Aspect Ratio',
//               infoDetails: '16:9'
//           },
//           {
//               infoName: 'Viewing Angle',
//               infoDetails: '178° (H) / 178° (V)'
//           },
//           {
//               infoName: 'Brightness',
//               infoDetails: '(NITS) 250'
//           },
//           {
//               infoName: 'Contrast Ratio',
//               infoDetails: '3000:1'
//           },
//           {
//               infoName: 'Refresh Rate',
//               infoDetails: '144Hz'
//           },
//           {
//               infoName: 'Color Support',
//               infoDetails: '16.7M'
//           },
//           {
//               infoName: 'Color Gamut',
//               infoDetails: '91.6% DCI-P3, 115.5% SRGB'
//           },
//           {
//               infoName: 'Response Time',
//               infoDetails: '1ms (MPRT)'
//           },
//           {
//               infoName: 'Others Features',
//               infoDetails: 'ACTIVE DISPLAY AREA (MM): 521.39 (H) x 293.2848 (V)'
//           }
//       ],
//       keyFeatures: [
//           {
//               title: 'Resolution',
//               details: 'FHD (1920 x 1080)'
//           },
//           {
//               title: 'Model',
//               details: 'G24C6'
//           },
//           {
//               title: 'Display',
//               details: 'VA, 144Hz, 1ms'
//           },
//           {
//               title: 'Ports',
//               details: 'HDMI, DP, 3.5mm Audio Out'
//           },
//           {
//               title: 'Features',
//               details: 'Free Sync'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/monitor/hp-monitor/m24fw/m24fw-500x500.jpg',
//       name: 'HP M24fw 24" FHD IPS Monitor',
//       category: 'Monitor',
//       status: 'In Stock',
//       price: '19,000৳',
//       spec: [
//           {
//               infoName: 'Display Size',
//               infoDetails: '23.6 Inch'
//           },
//           {
//               infoName: 'Display Type',
//               infoDetails: 'LED'
//           },
//           {
//               infoName: 'Panel Type',
//               infoDetails: 'VA'
//           },
//           {
//               infoName: 'Resolution',
//               infoDetails: 'FHD (1920 x 1080)'
//           },
//           {
//               infoName: 'Pixel pitch(MM)',
//               infoDetails: '0.27156(H) x 0.27156(V)'
//           },
//           {
//               infoName: 'Display Surface',
//               infoDetails: 'Anti-glare'
//           },
//           {
//               infoName: 'Aspect Ratio',
//               infoDetails: '16:9'
//           },
//           {
//               infoName: 'Viewing Angle',
//               infoDetails: '178° (H) / 178° (V)'
//           },
//           {
//               infoName: 'Brightness',
//               infoDetails: '(NITS) 250'
//           },
//           {
//               infoName: 'Contrast Ratio',
//               infoDetails: '3000:1'
//           },
//           {
//               infoName: 'Refresh Rate',
//               infoDetails: '144Hz'
//           },
//           {
//               infoName: 'Color Support',
//               infoDetails: '16.7M'
//           },
//           {
//               infoName: 'Color Gamut',
//               infoDetails: '91.6% DCI-P3, 115.5% SRGB'
//           },
//           {
//               infoName: 'Response Time',
//               infoDetails: '1ms (MPRT)'
//           },
//           {
//               infoName: 'Others Features',
//               infoDetails: 'ACTIVE DISPLAY AREA (MM): 521.39 (H) x 293.2848 (V)'
//           }
//       ],
//       keyFeatures: [
//           {
//               title: 'Resolution',
//               details: 'FHD (1920 x 1080)'
//           },
//           {
//               title: 'Model',
//               details: 'G24C6'
//           },
//           {
//               title: 'Display',
//               details: 'VA, 144Hz, 1ms'
//           },
//           {
//               title: 'Ports',
//               details: 'HDMI, DP, 3.5mm Audio Out'
//           },
//           {
//               title: 'Features',
//               details: 'Free Sync'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/monitor/asus/vy249he/vy249he-01-500x500.jpg',
//       name: 'Asus VY249HE 24" FHD IPS Eye Care Monitor',
//       category: 'Monitor',
//       status: 'In Stock',
//       price: '24,000৳',
//       spec: [
//           {
//               infoName: 'Display Size',
//               infoDetails: '23.6 Inch'
//           },
//           {
//               infoName: 'Display Type',
//               infoDetails: 'LED'
//           },
//           {
//               infoName: 'Panel Type',
//               infoDetails: 'VA'
//           },
//           {
//               infoName: 'Resolution',
//               infoDetails: 'FHD (1920 x 1080)'
//           },
//           {
//               infoName: 'Pixel pitch(MM)',
//               infoDetails: '0.27156(H) x 0.27156(V)'
//           },
//           {
//               infoName: 'Display Surface',
//               infoDetails: 'Anti-glare'
//           },
//           {
//               infoName: 'Aspect Ratio',
//               infoDetails: '16:9'
//           },
//           {
//               infoName: 'Viewing Angle',
//               infoDetails: '178° (H) / 178° (V)'
//           },
//           {
//               infoName: 'Brightness',
//               infoDetails: '(NITS) 250'
//           },
//           {
//               infoName: 'Contrast Ratio',
//               infoDetails: '3000:1'
//           },
//           {
//               infoName: 'Refresh Rate',
//               infoDetails: '144Hz'
//           },
//           {
//               infoName: 'Color Support',
//               infoDetails: '16.7M'
//           },
//           {
//               infoName: 'Color Gamut',
//               infoDetails: '91.6% DCI-P3, 115.5% SRGB'
//           },
//           {
//               infoName: 'Response Time',
//               infoDetails: '1ms (MPRT)'
//           },
//           {
//               infoName: 'Others Features',
//               infoDetails: 'ACTIVE DISPLAY AREA (MM): 521.39 (H) x 293.2848 (V)'
//           }
//       ],
//       keyFeatures: [
//           {
//               title: 'Resolution',
//               details: 'FHD (1920 x 1080)'
//           },
//           {
//               title: 'Model',
//               details: 'G24C6'
//           },
//           {
//               title: 'Display',
//               details: 'VA, 144Hz, 1ms'
//           },
//           {
//               title: 'Ports',
//               details: 'HDMI, DP, 3.5mm Audio Out'
//           },
//           {
//               title: 'Features',
//               details: 'Free Sync'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
// ]

// const others = [
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/keyboard/rapoo/v700-8a/v700-8a-01-500x500.webp',
//       name: 'Rapoo V700-8A Tri Mode White Backlit Blue Switch Mechanical Gaming Keyboard',
//       category: 'Keyboard',
//       status: 'In Stock',
//       price: '6,000৳',
//       spec: [
//           {
//               infoName: 'Type',
//               infoDetails: 'Mechanical key switch'
//           },
//           {
//               infoName: 'Wired/Wireless',
//               infoDetails: 'Bluetooth 3.0, Bluetooth 5.0, 2.4GHz and wired modes'
//           },
//           {
//               infoName: 'Keys',
//               infoDetails: '75% column 84 key layout, Full 84 keys programmable'
//           },
//           {
//               infoName: 'Switch Color',
//               infoDetails: 'Blue switch'
//           },
//           {
//               infoName: 'Switch Lifecycle',
//               infoDetails: '60 million times'
//           },
//           {
//               infoName: 'Lighting',
//               infoDetails: 'White Backlight'
//           },
//           {
//               infoName: 'Interface',
//               infoDetails: 'Bluetooth 3.0, Bluetooth 5.0 USB-C'
//           },
//           {
//               infoName: 'Others',
//               infoDetails: 'Lithium battery(4000mAh)/Battery life：25-225 Hours Intelligently switch among multiple devices Adjustable backlight Backlit: White/7 modes'
//           }
//       ],
//       keyFeatures: [
//           {
//               title: 'Number of keys',
//               details: '84 keys'
//           },
//           {
//               title: 'Model',
//               details: 'V700-8A'
//           },
//           {
//               title: 'Wired/Wireless',
//               details: 'Bluetooth 5.0/3.0, wireless 2.4G, wired'
//           },
//           {
//               title: 'Battery capacity',
//               details: '4000mAh lithium'
//           },
//           {
//               title: 'Charging port',
//               details: 'USB-C'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/mouse/lenovo/y-gaming/y-gaming-01-500x500.jpg',
//       name: 'Lenovo Legion Precision Wired Gaming Mouse',
//       category: 'Mouse',
//       status: 'In Stock',
//       price: '2,950৳',
//       spec: [
//           {
//               infoName: 'Connection Type',
//               infoDetails: 'Wired via USB'
//           },
//           {
//               infoName: 'Optical Sensor Resolution',
//               infoDetails: 'Adjustable: 4 levels up to 8200 DPI'
//           },
//           {
//               infoName: 'Cable Length',
//               infoDetails: '1.80 m (Braided cable)'
//           }
//       ],
//       keyFeatures: [
//           {
//               title: 'MPN',
//               details: 'GX30J07894'
//           },
//           {
//               title: 'Model',
//               details: 'Lenovo Legion Precision'
//           },
//           {
//               title: 'DPI',
//               details: 'Ultra-high DPI, up to 8200 dpi'
//           },
//           {
//               title: 'Buttons',
//               details: '9 programmable buttons'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
//   {
//       img: 'https://www.startech.com.bd/image/cache/catalog/speaker/havit/sk204/sk204-001-500x500.jpg',
//       name: 'Havit SK204 RGB Gaming USB Speaker',
//       category: 'Speaker',
//       status: 'In Stock',
//       price: '1,000৳',
//       spec: [
//           {
//               infoName: 'Subwoofer',
//               infoDetails: '3Wx2 (RMS)'
//           },
//           {
//               infoName: 'Signal / noise ratio',
//               infoDetails: '6W'
//           },
//           {
//               infoName: 'Resistance',
//               infoDetails: '4ohm'
//           },
//           {
//               infoName: 'Frequency response',
//               infoDetails: '100Hz - 20KHz'
//           },
//           {
//               infoName: 'Jack',
//               infoDetails: '3.5mm stereo audio input'
//           }
//       ],
//       keyFeatures: [
//           {
//               title: 'MPN',
//               details: 'HV-SK204'
//           },
//           {
//               title: 'Model',
//               details: 'SK204'
//           },
//           {
//               title: 'Speakers type',
//               details: '2.0 electronic sports speakers'
//           },
//           {
//               title: 'Output power',
//               details: '3Wx2 (RMS)'
//           },
//           {
//               title: 'Driver Size',
//               details: '2.5inch x2'
//           }
//       ],
//       individualRating: '4 out of 5',
//       AvarageRating: '3.5 out of 5',
//       review: [
//           {
//               name: 'John Smith',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Alex Kalvin',
//               review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
//           },
//           {
//               name: 'Jonny English',
//               review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
//           },
//       ]
//   },
// ]
