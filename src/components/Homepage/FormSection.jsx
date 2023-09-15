import { useRef } from "react";
import toast from "react-hot-toast";

const FormSection = () => {

    const submitButtonRef = useRef();

    // using Refs to avoid unnecessary re-renders
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Making 1st alphabet capital for name
        const name = nameRef.current.value.split(" ");
        let capitalizedName = name.map(item => item.charAt(0).toUpperCase() + item.slice(1));
        capitalizedName = capitalizedName.join(" ");

        // organizing data for console.log()
        const data = {
            name: capitalizedName,
            email: emailRef.current.value,
            message: messageRef.current.value,
        }

        // make API request here

        // logging data
        console.log("Form Submitted>>>", data);

        // showing success toast
        toast.success("Submitted Successfully");

        // scrolling focus to top of the page
        window.scrollTo(0, 0);

        // resetting the form
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
    }

    return (
        <div
            id="contact"
            className="relative w-full overflow-x-hidden text-grey-form"
        >
            <div id='formBgTexture' className="pt-[5.125rem] max-w-maxContent w-11/12 mx-auto pb-8 overflow-hidden">

                <div className="w-full flex flex-col items-center lg:items-start lg:flex-row gap-x-[200px]">
                    <div className="text-center lg:text-start">
                        <p className="font-syne text-[1.625rem] font-semibold leading-normal">Newlleter</p>
                        <p className="font-work-sans w-[290px] lg:w-[337px] text-lg font-normal leading-normal">
                            Get news about articles and updates in your inbox.
                        </p>
                    </div>

                    {/* FORM */}
                    <form
                        className="flex flex-col gap-y-[2.1875rem] mt-[60px] lg:mt-0 w-full lg:w-[50%]"
                        onSubmit={handleSubmit}
                    >
                        <input
                            ref={nameRef}
                            className="py-1 px-2 lg:max-w-[558px] bg-transparent border-b-[1px] border-grey-form capitalize"
                            type="text" name={"name"} placeholder="NAME" minLength={3} required
                        />
                        <input
                            ref={emailRef}
                            className="py-1 px-2 lg:max-w-[558px] bg-transparent border-b-[1px] border-grey-form"
                            type="email" name={"email"} placeholder="EMAIL" required
                        />
                        <input
                            ref={messageRef}
                            className="py-1 px-2 lg:max-w-[558px] bg-transparent border-b-[1px] border-grey-form"
                            type="text" name={"message"} placeholder="MESSAGE" minLength={10} required
                        />


                        <button ref={submitButtonRef} type="submit" className="hidden">Submit</button>
                    </form>
                </div>

                <div className="mt-[77px] lg:mt-[2.375rem] relative">
                    <h1 className="font-syne text-white uppercase text-[3.5rem] lg:text-[8.4375rem] font-extrabold leading-[76%]">
                        Get<br />in touch
                    </h1>

                    <button
                        onClick={() => submitButtonRef.current.click()}
                        type="button"
                        className="text-orange font-work-sans text-sm lg:text-[1.625rem] font-normal leading-[61.538%] border border-orange p-[35px] lg:p-[55px] aspect-square rounded-full absolute bottom-[22%] right-0 lg:bottom-[25%] lg:right-[13%]"
                    >
                        SEND
                    </button>
                </div>


            </div>
        </div>
    )
}

export default FormSection