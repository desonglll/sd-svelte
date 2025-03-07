<script lang="ts">
  import Logo from "./Logo.svelte";

  const formData = {
    email: "",
    address: "",
    name: "",
    tel: "",
    message: "",
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    console.log("Form Data: ", formData);
  };
</script>

<div class="contact-form">
  <div class="contact-info">
    <div class="logo-wrapper">
      <Logo />
    </div>
    <p class="description">
      Our business spans construction machinery and heavy vehicles, offering
      one-stop solutions from individual equipment to comprehensive systems.
      Whether you need excavators, loaders, dump trucks, or specialized
      vehicles, we provide diverse, tailored options to meet your unique needs.
    </p>
    <div class="contact-details">
      <p><span>Tel:</span> +61 493307701, +86 15006905606</p>
      <p>
        <span>Email:</span>
        <a href="mailto:shunde02@sd-get.com">shunde02@sd-get.com</a>
      </p>
      <p><span>Address:</span> 3 George Julius Ave, Zetland, Sydney, NSW</p>
    </div>
  </div>

  <form class="form" on:submit={handleSubmit}>
    <div class="form-item">
      <input
        id="email"
        type="email"
        placeholder="Email *"
        bind:value={formData.email}
        required
      />
    </div>
    <div class="form-item">
      <input
        id="name"
        type="text"
        placeholder="Name *"
        bind:value={formData.name}
        required
      />
    </div>
    <div class="form-item">
      <input
        id="tel"
        type="tel"
        placeholder="Phone *"
        bind:value={formData.tel}
        required
      />
    </div>
    <div class="form-item">
      <textarea
        id="message"
        placeholder="Your Message *"
        bind:value={formData.message}
        required
      ></textarea>
    </div>
    <div class="form-item">
      <button type="submit">Submit</button>
    </div>
  </form>
</div>

<style lang="scss">
  @use "sass:color";
  $primary-color: #000;
  $secondary-color: #6e6e73;
  $background-color: #f5f5f7;
  $accent-color: #0071e3;
  $font-family:
    "SF Pro Display",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;

  .contact-form {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    background-color: $background-color;
    border-radius: 12px;
    // box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
    max-width: 1200px;
    margin: 0 auto;
    font-family: $font-family;
    gap: 40px;

    .contact-info {
      width: 45%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .logo-wrapper {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
      }

      .description {
        font-size: 18px;
        line-height: 1.6;
        color: $secondary-color;
        margin-bottom: 30px;
        opacity: 0.9;
      }

      .contact-details {
        p {
          font-size: 16px;
          line-height: 1.5;
          color: $secondary-color;
          margin-bottom: 12px;

          span {
            font-weight: 600;
            color: $primary-color;
            margin-right: 8px;
          }

          a {
            color: $accent-color;
            text-decoration: none;
            transition: color 0.3s ease;

            &:hover {
              color: color.adjust($accent-color, $lightness: 10%);
              text-decoration: underline;
            }
          }
        }
      }
    }

    .form {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .form-item {
        input,
        textarea {
          width: 100%;
          padding: 12px 16px;
          font-size: 16px;
          border: 1px solid #d2d2d7;
          border-radius: 8px;
          background-color: #fff;
          color: $primary-color;
          outline: none;
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease;

          &:focus {
            border-color: $accent-color;
            box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.2);
          }

          &::placeholder {
            color: $secondary-color;
            opacity: 0.8;
          }
        }

        textarea {
          min-height: 120px;
          resize: vertical;
        }

        button {
          padding: 12px 24px;
          background-color: $accent-color;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: color.adjust($accent-color, $lightness: 10%);
          }
        }
      }
    }

    /* 中等屏幕调整 */
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 30px;
      gap: 30px;

      .contact-info,
      .form {
        width: 100%;
      }

      .contact-info {
        .description {
          font-size: 16px;
        }

        .contact-details p {
          font-size: 14px;
        }
      }

      .form {
        .form-item {
          input,
          textarea {
            font-size: 14px;
            padding: 10px 14px;
          }

          button {
            font-size: 14px;
            padding: 10px 20px;
          }
        }
      }
    }

    /* 超小屏幕调整 */
    @media (max-width: 480px) {
      padding: 20px;

      .contact-info {
        .description {
          font-size: 14px;
          margin-bottom: 20px;
        }

        .contact-details p {
          font-size: 13px;
          margin-bottom: 10px;
        }
      }

      .form {
        gap: 16px;

        .form-item {
          input,
          textarea {
            font-size: 13px;
            padding: 8px 12px;
          }

          textarea {
            min-height: 100px;
          }

          button {
            font-size: 13px;
            padding: 8px 16px;
          }
        }
      }
    }
  }
</style>
