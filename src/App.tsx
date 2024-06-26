import BlueCard from "./components/BlueCard/BlueCard";
import Form from "./components/Form/Form";

export default function App() {
  return (
    <section className="bg-mobile md:bg-desktop bg-softPink bg-repeat h-full md:h-screen md:grid md:grid-cols-2 pt-24 md:pt-0" >

      <section className="text-white flex justify-center items-center" >

        <div className="text-center" >
          <h1 className="text-4xl font-bold md:max-w-sm md:text-5xl">
            Learn to code by watching others
          </h1>

          <p className="max-w-lg py-7 mx-7 text-center md:text-left md:ml-0 md:text-lg">
            See how experienced developers solve problems in real time.
            Watching scripted tutorials is great, but understanding how
            developers is invaluable.
          </p>
        </div>

      </section>

      <section className="md:flex md:justify-center md:items-center">

        <div className="" >
          <BlueCard />

          <Form />
        </div>

      </section>

    </section>
  )
}