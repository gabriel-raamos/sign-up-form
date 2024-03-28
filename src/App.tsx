import BlueCard from "./components/BlueCard/BlueCard";
import Form from "./components/Form/Form";

export default function App() {
  return (
    <section className="bg-mobile md:bg-desktop bg-softPink bg-repeat h-full md:grid md:grid-cols-2 pt-24 md:pt-0" >

      <div className="text-white flex justify-center items-center" >

        <div className="text-center" >
          <h1 className="text-4xl font-bold md:max-w-sm">
            Learn to code by watching others
          </h1>

          <p className="max-w-xs py-7 ml-5 text-center md:ml-8">
            See how experienced developers solve problems in real time.
            Watching scripted tutorials is great, but understanding how
            developers is invaluable.
          </p>
        </div>

      </div>

      <div className="md:flex md:justify-center md:text-center">

        <div>
          <BlueCard />

          <Form />
        </div>

      </div>

    </section>
  )
}