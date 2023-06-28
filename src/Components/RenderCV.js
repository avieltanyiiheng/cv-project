import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

const RenderCV = () => {
  // Render Firstname, lastnae, workexp
  const [firstName, setFirstName] = useState("First");
  const [lastName, setlastName] = useState("Last");
  const [workexp, setworkexp] = useState("Work exp");

  //   Render showform
  const [showForm, setShowForm] = useState(false);

  //   obj for rendering the work experiences

  const [showWorkExp, setShowWorkExp] = useState(false);
  const [prevWorkExp, setPrevWorkExp] = useState([
    {
      company: "Company",
      yearStart: 1111,
      yearEnd: "2222",
      city: "",
      role: "Role",
      desc: "Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ",
    },
    {
      company: "Company2",
      yearStart: 1111,
      yearEnd: 2222,
      city: "City2",
      role: "Role2",
      desc: "Lorum2 Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ",
    },
  ]);

  //   Function for handling input
  function handleFirstName(e) {
    setFirstName(e.target.value);
    console.log(e.target.className);
  }

  function handleLastName(e) {
    setlastName(e.target.value);
  }

  function handleworkexp(e) {
    setworkexp(e.target.value);
  }

  //   Function to show inputs on click
  function changeToShowForm() {
    setShowForm(!showForm);
  }

  function changeToShowWorkExp() {
    setShowWorkExp(!showWorkExp);
  }

  function createNewWorkExpObj() {
    const newWorkExp = {};
  }

  const [initialCompanyObj, setInitialCompanyObj] = useState({
    company: "",
    yearStart: "",
    yearEnd: "",
    city: "aa",
    role: "",
    desc: "",
  });

  const keys = Object.keys(initialCompanyObj);

  function mapShit(arr) {
    arr.map((key) => {
      return <li>{key}</li>;
    });
  }

  function handleChange(e) {
    const newInitalCompanyObj = initialCompanyObj;
    console.log(e.target.className);
    const a = e.target.className;
    newInitalCompanyObj[a] = e.target.value;
    setInitialCompanyObj({ ...newInitalCompanyObj });
    console.log(initialCompanyObj);
    // console.log([...prevWorkExp, newInitalCompanyObj]);
  }

  // setInitialCompanyObj("test");
  return (
    <div className="resume">
      <div className="name">
        <h1 className="first">{firstName} </h1>
        <h1 className="last">{lastName}</h1>
      </div>
      <p className="workexp">
        <i>{workexp}</i>
      </p>

      <Button
        formToggle={changeToShowForm}
        toggleState={showForm}
        text="EDIT"
      />

      {showForm && (
        <div className="initialForm">
          <p>First Name:</p>
          <Input
            type="text"
            name={firstName}
            handleOnChange={handleFirstName}
            name="A"
          />
          <p>Last Name:</p>

          <Input type="text" name={lastName} handleOnChange={handleLastName} />

          <p>Prev. Work Experience:</p>

          <Input type="text" name={workexp} handleOnChange={handleworkexp} />
        </div>
      )}
      <div className="workExperience">
        <h3>Work Experiences</h3>

        {prevWorkExp.map((workExpz) => (
          <div className="work-exp-header">
            <p>{workExpz.company}</p>
            <p>
              {workExpz.yearStart} - {workExpz.yearEnd}
            </p>
            <p>City: {workExpz.city}</p>
            <p>Role: {workExpz.role}</p>
            <p>{workExpz.desc}</p>
            <button
              onClick={(e) =>
                setPrevWorkExp(
                  prevWorkExp.filter(
                    (workExperiences) =>
                      workExperiences.company !== workExpz.company
                  )
                )
              }
            >
              Remove
            </button>
          </div>
        ))}

        <Button
          formToggle={changeToShowWorkExp}
          toggleState={showWorkExp}
          text="Add Work Experience"
        />

        {showWorkExp && (
          <div className="initialForm">
            <p>Company:</p>

            <Input type="text" name="company" handleOnChange={handleChange} />

            <p>Start Year:</p>

            <Input type="text" name="yearStart" handleOnChange={handleChange} />

            <p>End Year:</p>

            <Input type="text" name="yearEnd" handleOnChange={handleChange} />

            <p>City:</p>

            <Input type="text" name="city" handleOnChange={handleChange} />

            <p>Role:</p>

            <Input type="text" name="role" handleOnChange={handleChange} />

            <p>Description:</p>

            <Input type="text" name="desc" handleOnChange={handleChange} />

            <Button
              text="Add Experience"
              formToggle={() => {
                const prevWorkExp2 = prevWorkExp;
                prevWorkExp2.push(initialCompanyObj);
                setPrevWorkExp(prevWorkExp2);
                console.log(prevWorkExp2);

                setShowWorkExp(!showWorkExp);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RenderCV;
