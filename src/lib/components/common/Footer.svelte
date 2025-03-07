<script lang="ts">
  import Logo from "./Logo.svelte";
  const info = {
    tel: "+61 493307701, +86 15006905606",
    email: "shunde02@sd-get.com",
    address: "3 George Julius Ave, Zetland, Sydney, NSW",
  };

  let email: string;
  let name: string;
  let content: string;

  const handleSubmit = () => {
    const formData = { email, name, content };
    console.log("Form Data: ", formData);
  };
</script>

<footer class="footer">
  <div class="footer__section footer__contact">
    <div class="footer__contact-left">
      <div class="footer__logo">
        <Logo />
      </div>
      <div class="footer__qr">
        <img src="/whatsapp.jpg" alt="WhatsApp QR Code" />
      </div>
    </div>

    <div class="footer__contact-right">
      <h2>Contact Us</h2>
      <div class="contact-info">
        <p><span>Tel:</span> {info.tel}</p>
        <p>
          <span>Email:</span> <a href={`mailto:${info.email}`}>{info.email}</a>
        </p>
        <p><span>Address:</span> {info.address}</p>
      </div>
    </div>
  </div>

  <div class="footer__section footer__quote">
    <h3>Get a Free Quote</h3>
    <form class="form" on:submit|preventDefault={handleSubmit}>
      <div class="form-item">
        <input
          id="email"
          type="email"
          bind:value={email}
          placeholder="Email *"
          required
        />
      </div>
      <div class="form-item">
        <input
          id="name"
          type="text"
          bind:value={name}
          placeholder="Name *"
          required
        />
      </div>
      <div class="form-item">
        <textarea
          id="content"
          bind:value={content}
          placeholder="Message *"
          required
        ></textarea>
      </div>
      <div class="form-item">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</footer>

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

  .footer {
    background-color: $background-color;
    color: $primary-color;
    padding: 60px 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-family: $font-family;
    border-top: 1px solid #d2d2d7;

    &__section {
      margin-bottom: 30px;
    }

    &__contact {
      width: 70%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;

      &-left {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &-right {
        width: 60%;

        h2 {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
          text-transform: uppercase;
        }

        .contact-info {
          p {
            font-size: 16px;
            line-height: 1.5;
            color: $secondary-color;
            margin-bottom: 10px;

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
                color: color.adjust($accent-color, $lightness: -10%);
                text-decoration: underline;
              }
            }
          }
        }
      }

      .footer__logo {
        height: 8vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .footer__qr {
        margin-top: 20px;

        img {
          width: 60%;
          max-width: 140px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;

          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }

    &__quote {
      width: 28%;

      h3 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 20px;
        letter-spacing: -0.5px;
        text-transform: uppercase;
      }

      .form {
        display: flex;
        flex-direction: column;

        .form-item {
          margin-bottom: 16px;

          input,
          textarea {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            border: 1px solid #d2d2d7;
            border-radius: 8px;
            background-color: #fff;
            color: $primary-color;
            outline: none;
            transition: border-color 0.3s ease;

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
            min-height: 100px;
            resize: vertical;
          }
        }

        button {
          padding: 10px 20px;
          background-color: $accent-color;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: color.adjust($accent-color, $lightness: -10%);
          }
        }
      }
    }

    /* 中等屏幕调整 */
    @media (max-width: 768px) {
      padding: 40px 20px;
      flex-direction: column;

      &__contact {
        width: 100%;
        flex-direction: column;
        align-items: center;
        text-align: center;

        &-left {
          width: 100%;
          margin-bottom: 30px;
        }

        &-right {
          width: 100%;

          h2 {
            font-size: 24px;
          }
        }

        .footer__qr img {
          width: 50%;
        }
      }

      &__quote {
        width: 100%;

        h3 {
          font-size: 20px;
        }
      }
    }

    /* 超小屏幕调整 */
    @media (max-width: 480px) {
      padding: 30px 15px;

      &__contact {
        .footer__qr img {
          width: 40%;
          max-width: 120px;
        }

        &-right {
          h2 {
            font-size: 20px;
          }

          .contact-info p {
            font-size: 14px;
          }
        }
      }

      &__quote {
        h3 {
          font-size: 18px;
        }

        .form {
          input,
          textarea {
            font-size: 14px;
            padding: 10px;
          }

          button {
            font-size: 14px;
            padding: 8px 16px;
          }
        }
      }
    }
  }
</style>
