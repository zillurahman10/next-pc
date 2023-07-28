import RootLayout from "@/components/Layout/RootLayout"
import Banner from "@/components/UI/Carousel";
import ComponentCard from "@/components/UI/ComponentCard";

function Home({ components }) {
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
      <Banner></Banner>
      <div className="mt-12">
        <h1 className="text-2xl text-center mt-12">Featured Product</h1>
        <p className="text-center">Checkout our featured products</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5 w-full ">
          {
            random.map(product => <ComponentCard key={product?.index} product={product}></ComponentCard>)
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
  const res = await fetch("http://localhost:3004/components")
  const data = await res.json()
  return {
    props: {
      components: data
    }
  }
}
