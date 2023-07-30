import RootLayout from "@/components/Layout/RootLayout"
import Banner from "@/components/UI/Carousel";
import ComponentCard from "@/components/UI/ComponentCard";
import FeaturedCard from "@/components/UI/FeaturedCard";

function Home({ components, featured }) {
  let random = []
  const cpu = components.data[0].cpu
  const motherboard = components.data[0].motherboard
  const monitor = components.data[0].monitor
  const powerSupplyUnit = components.data[0].powerSupplyUnit
  const ram = components.data[0].ram
  const storageDevice = components.data[0].storageDevice

  random.push(...cpu, ...motherboard, ...monitor, ...powerSupplyUnit, ...storageDevice, ...ram)

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
              random.map(product => <ComponentCard key={product?.index} product={product}></ComponentCard>)
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

const featured = [
  {
    img: 'https://i.ibb.co/ScsjPsj/cpu-65x65.png',
    name: 'CPU / Processor',
    link: '/cpu'
  },
  {
    img: 'https://i.ibb.co/xDhZwKN/mobo-65x65.png',
    name: 'Motherboard',
    link: '/motherboard'
  },
  {
    img: 'https://i.ibb.co/4T1vRKj/ram-65x65.png',
    name: 'Ram',
    link: '/ram'
  },
  {
    img: 'https://i.ibb.co/hC6Q4hh/monitor-65x65.png',
    name: 'Monitor',
    link: '/monitor'
  },
  {
    img: 'https://i.ibb.co/4Ygtw1h/psu-65x65.png',
    name: 'Power Supply',
    link: '/power-supply'
  },
  {
    img: 'https://i.ibb.co/fMWkypC/ssd-65x65.png',
    name: 'Storage Device',
    link: '/storage'
  },
  {
    img: 'https://i.ibb.co/ScsjPsj/cpu-65x65.png',
    name: 'Others',
    link: '/others'
  },
]
