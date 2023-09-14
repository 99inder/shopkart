import { useRef } from "react";

const FormSection = () => {

    const submitButtonRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
    }

    return (
        <div className="relative w-full overflow-x-hidden text-grey-form">
            <div id='formBgTexture' className="pt-[5.125rem] max-w-maxContent w-11/12 mx-auto pb-8 overflow-hidden">

                <div className="w-full flex gap-x-[200px]">
                    <div>
                        <p className="font-syne text-[1.625rem] font-semibold leading-normal">Newlleter</p>
                        <p className="font-work-sans text-lg font-normal leading-normal">
                            Get news about articles and updates <br />in your inbox.
                        </p>
                    </div>

                    {/* FORM */}
                    <form
                        className="flex flex-col gap-y-[2.1875rem] w-[50%]"
                        onSubmit={handleSubmit}
                    >
                        <input
                            className="py-1 px-2 max-w-[558px] bg-transparent border-b-[1px] border-grey-form"
                            type="text" name={"name"} placeholder="NAME"
                        />
                        <input
                            className="py-1 px-2 max-w-[558px] bg-transparent border-b-[1px] border-grey-form"
                            type="email" name={"email"} placeholder="EMAIL"
                        />
                        <input
                            className="py-1 px-2 max-w-[558px] bg-transparent border-b-[1px] border-grey-form"
                            type="text" name={"message"} placeholder="MESSAGE"
                        />


                        <button ref={submitButtonRef} type="submit" className="hidden">Submit</button>
                    </form>
                </div>

                <div className="mt-[2.375rem] relative">
                    <h1 className="font-syne text-white uppercase text-[8.4375rem] font-extrabold leading-[76%]">
                        Get<br />in touch
                    </h1>
                    
                    <button
                        onClick={() => submitButtonRef.current.click()}
                        type="button"
                        className="text-orange font-work-sans text-[1.625rem] font-normal leading-[61.538%] border border-orange p-[55px] aspect-square rounded-full absolute bottom-[25%] right-[13%]"
                    >
                        SEND
                    </button>
                </div>


            </div>
        </div>
    )
}

export default FormSection