import Icon from "./Icons";

export default function Loading() {
  return (
    <div className="w-10 h-10 flex p-2 fixed bottom-4 right-4 bg-black rounded-xl justify-center items-center">
      <Icon name="TbSword" className="animate-spin text-white" />
    </div>
  )
}