import { useState } from "react";
import Button from "../../global/components/btn";
import Heading from "../../global/components/heading";
import Space from "../../global/components/space";

import "./styles/index.scss";
import { ID, collectionId, databaseId, databases } from "../../lib/appwrite";

const RegisterPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    function submitForm(e) {
        setBtnDisabled(true);
        e.preventDefault();
        const phoneNumber = e.target[0].value;
        const email = e.target[1].value;
        const name = e.target[1].value;
        const currentCourse = e.target[1].value;
        console.log(phoneNumber);
        const promise = databases.createDocument(databaseId, collectionId, ID.unique(), {
            phoneNumber,
            email,
            name,
            currentCourse,
        });

        promise.then(
            function (response) {
                console.log(response);
                setSubmitted(true);
                setBtnDisabled(false);
            },
            function (error) {
                alert(error);
                console.log(error);
                setBtnDisabled(false);
            }
        );
    }
    return (
        <section className="bg-register flex justify-center align-center">
            <div className="main-register-container rounded-rectangle drop-shadow flex flex-column justify-center align-center">
                {!submitted ? (
                    <>
                        <Heading
                            text="Join us "
                            secondaryText="now!"
                            size="1.8rem"
                            fontWeight={600}
                            maxWidth={"100%"}
                            font="Raleway"
                            center={true}
                            secondaryTextColor="#0056B8"
                        />
                        <Heading
                            text="We will get back to you shortly!"
                            size="1rem"
                            fontWeight={400}
                            maxWidth={"100%"}
                            font="PT Sans"
                            center={true}
                        />
                        <Space amt={10} />
                        <form
                            className="flex flex-column justify-center align-center"
                            onSubmit={submitForm}
                        >
                            <input
                                type="number"
                                placeholder="Phone number"
                                name="number"
                                id=""
                                required
                                className="input-main"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                id=""
                                required
                                className="input-main"
                            />
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                id=""
                                required
                                className="input-main"
                            />
                            {/* <input
                                type="text"
                                placeholder="Current course (9, 10, dropper etc)"
                                name=""
                                id=""
                                required
                                className="input-main"
                            /> */}
                            {/* <DropDownMenu /> */}
                            <select
                                name="currentCourse"
                                id="currentCourse"
                                className="input-main"
                                required
                            >
                                <option value="" disabled selected>
                                    Current Course
                                </option>
                                <option value="9">Class 9</option>
                                <option value="10">Class 10</option>
                                <option value="11">Class 11</option>
                                <option value="12">Class 12</option>
                                <option value="dropper">Dropper</option>
                            </select>
                            <Space amt={10} />
                            {!btnDisabled && (
                                <Button
                                    text="Join Now!"
                                    bgColor="#0056B8"
                                    fgColor="#fff"
                                    width={140}
                                    height={36}
                                    type="filled"
                                    disabled={btnDisabled}
                                />
                            )}
                            <Space amt={10} />
                            <Heading
                                text="We do not share your information with any third party."
                                size="0.6rem"
                                fontWeight={400}
                                maxWidth={"100%"}
                                font="PT Sans"
                                center={true}
                            />
                        </form>
                        <Space amt={10} />
                        <div className="logo-right-container">
                            <img src="logo-bgwhite.png" alt="" />
                        </div>
                    </>
                ) : (
                    <>
                        <Heading
                            text="Thank "
                            secondaryText="you!"
                            size="1.8rem"
                            fontWeight={600}
                            maxWidth={"100%"}
                            font="Raleway"
                            center={true}
                            secondaryTextColor="#0056B8"
                            color="#639D4A"
                        />
                        <Heading
                            text="Our team will contact you with further details shortly."
                            size="1rem"
                            fontWeight={400}
                            maxWidth={300}
                            font="PT Sans"
                            center={true}
                        />
                        <Space amt={10} />
                        <Button
                            text="Return to home page"
                            bgColor="#0056B8"
                            fgColor="#fff"
                            width={220}
                            height={36}
                            type="filled"
                            linkTo="/"
                        />
                    </>
                )}
            </div>
        </section>
    );
};

export default RegisterPage;
