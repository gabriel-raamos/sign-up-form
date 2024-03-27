import BlueCard from "./components/BlueCard/BlueCard";
import Form from "./components/Form/Form";

export default function App() {
  return (
    <div className="bg-mobile md:bg-desktop bg-repeat bg-softPink h-screen" >

      <div className="text-white justify-center items-center" >

        <h1 className="text-3xl font-bold pt-24 flex justify-center md:max-w-sm">
          Learn to code by <br />
          watching others
        </h1>

        <p className="max-w-xs py-7 flex justify-center items-center pl-10 text-center">
          See how experienced developers solve problems in real time.
          Watching scripted tutorials is great, but understanding how 
          developers is invaluable.
        </p>

      </div>

      <BlueCard/>

      <Form />

    </div>
  )
}