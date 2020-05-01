import React, { useState } from "react";
import styles from "./App.module.css";

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
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    feedbackType: "comment",
    comment: "",
    bugReport: "",
    bugType: "",
    question: "",
    questionType: "",
  });

  const handleFormDataChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  return (
    <div>
      <h2>Feedback form</h2>
      <form>
        Full Name:
        <input
          required
          value={formData.name}
          name="name"
          onChange={handleFormDataChange}
        />
        Email Address:
        <input
          required
          type="email"
          value={formData.email}
          name="email"
          onChange={handleFormDataChange}
        />
        <div className={styles.feedbackType}>
          Feedback Type:
          <input
            checked={formData.feedbackType === "comment"}
            type="radio"
            name="feedbackType"
            value="comment"
            id="comment"
            onChange={handleFormDataChange}
          />
          <label htmlFor="comment">Comment</label>
          <input
            checked={formData.feedbackType === "bug"}
            type="radio"
            name="feedbackType"
            value="bug"
            id="bug"
            onChange={handleFormDataChange}
          />
          <label htmlFor="bug">Bug Report</label>
          <input
            checked={formData.feedbackType === "question"}
            type="radio"
            name="feedbackType"
            value="question"
            id="question"
            onChange={handleFormDataChange}
          />
          <label htmlFor="question">Question</label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
