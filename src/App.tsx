import React, { useState } from "react";
import clsx from "clsx";
import styles from "./App.module.css";
import RadioGroup from "./RadioGroup";

console.log(styles);

type FormData = {
  name: string;
  email: string;
  feedbackType: string;
  comment: string;
  bugReport: string;
  bugType: string;
  question: string;
  questionType: string;
};

function App() {
  const defaultFormData = {
    name: "",
    email: "",
    feedbackType: "comment",
    comment: "",
    bugReport: "",
    bugType: "",
    question: "",
    questionType: "",
  };

  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const feedbackOptions = [
    { value: "comment", label: "Comment" },
    { value: "bugReport", label: "Bug Report" },
    { value: "question", label: "Question" },
  ];

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleTextAreaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.root}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();

          console.log(formData);
          setFormData(defaultFormData);
        }}
      >
        <h1 className={styles.formHeader}>Feedback form</h1>
        <div className={styles.formGroup}>
          <label className={styles.label}>Full Name:</label>
          <input
            className={styles.formControl}
            required
            value={formData.name}
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email Address:</label>
          <input
            className={styles.formControl}
            required
            type="email"
            value={formData.email}
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Feedback Type:</label>
          <RadioGroup
            groupName="feedbackType"
            options={feedbackOptions}
            onChange={handleInputChange}
            selectedValue={formData.feedbackType}
          />
        </div>
        <div className={styles.formGroup}>
          {formData.feedbackType === "comment" && (
            <textarea
              className={clsx(styles.textarea, styles.formControl)}
              name="comment"
              value={formData.comment}
              onChange={handleTextAreaChange}
            />
          )}
        </div>
        {formData.feedbackType === "bugReport" && (
          <div className={styles.formGroup}>
            <select
              id="bugType"
              name="bugType"
              value={formData.bugType}
              onChange={handleSelectChange}
            >
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
            <textarea
              className={clsx(styles.textarea, styles.formControl)}
              name="bugReport"
              value={formData.bugReport}
              onChange={handleTextAreaChange}
            />
          </div>
        )}
        {formData.feedbackType === "question" && (
          <div className={styles.formGroup}>
            <select
              id="questionType"
              name="questionType"
              value={formData.questionType}
              onChange={handleSelectChange}
            >
              <option value="pricing">Pricing</option>
              <option value="features">Features</option>
              <option value="misc">Misc</option>
            </select>
            <textarea
              className={clsx(styles.textarea, styles.formControl)}
              name="question"
              value={formData.question}
              onChange={handleTextAreaChange}
            />
          </div>
        )}
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
