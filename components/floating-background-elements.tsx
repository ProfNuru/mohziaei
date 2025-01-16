import FloatingBox from "./floating-box";
import FloatingCircle from "./floating-circle";
import FloatingDotsGrid from "./floating-dots-grid";
import FloatingLine from "./floating-line";
import FloatingStar from "./floating-star";
import FloatingTriangle from "./floating-triangle";

const FloatingBackgroundElements = () => {
  return (
    <>
        <div className="absolute top-[10%] left-[3%]">
            <FloatingCircle color="purple" />
        </div>

        <div className="absolute top-[55%] left-[50%]">
            <FloatingCircle color="green" />
        </div>

        <div className="absolute top-[85%] left-[20%]">
            <FloatingCircle color="green" />
        </div>

        <div className="absolute top-[65%] right-[2%]">
            <FloatingCircle color="green" />
        </div>

        <div className="absolute top-[100%] right-[15%]">
            <FloatingCircle color="green" />
        </div>

        <div className="absolute top-[20%] left-[30%]">
            <FloatingTriangle />
        </div>

        <div className="absolute top-[75%] left-[2%]">
            <FloatingTriangle alternate />
        </div>

        <div className="absolute top-[50%] right-[2%]">
            <FloatingTriangle alternate />
        </div>

        <div className="absolute top-[55%] left-[12%]">
            <FloatingLine color="purple" />
        </div>

        <div className="absolute top-[75%] right-[5%]">
            <FloatingLine color="purple" />
        </div>

        <div className="absolute top-[98%] right-[5%]">
            <FloatingBox color="green" />
        </div>

        <div className="absolute top-[85%] left-[35%]">
            <FloatingLine color="green" size="sm" />
        </div>

        <div className="absolute top-[85%] left-[2%]">
            <FloatingDotsGrid />
        </div>

        <div className="absolute top-[15%] right-[10%]">
            <FloatingDotsGrid />
        </div>

        <div className="absolute top-[80%] left-[50%]">
            <FloatingStar color="red" size="sm" />
        </div>

        <div className="absolute top-[24%] left-[60%]">
            <FloatingStar color="red" size="lg" />
        </div>
    </>
  )
}

export default FloatingBackgroundElements
