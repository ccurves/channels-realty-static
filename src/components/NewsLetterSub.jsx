import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const NewsLetterSub = () => {
  const url = process.env.REACT_APP_MAILCHIMP_URL;
  const SimpleForm = () => <MailchimpSubscribe url={url} />;

  const CustomForm = ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });

    return (
      <div>
        {status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <div class="input-card mt-3">
          <div class="input-card-form">
            <input
              type="text"
              class="form-control"
              placeholder="Enter email"
              aria-label="Enter email"
              ref={(node) => (email = node)}
            />
          </div>
          <button type="button" class="btn btn-primary" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mb-8">
      <div className="row align-items-center justify-content-center text-center">
        <div class="col-md-6 col-lg-8  ">
          <form>
            <h5 class="text-dark display-6">Stay up to date</h5>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
          </form>

          <p class="form-text">New updates or big discounts. Never spam.</p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSub;
