import styled from 'styled-components';

export const Body = styled.div`
  h1 {
    text-align: center;
    color: #fff;
  }

  .social-dashboard {
    display: grid;
    margin: 20px;
    margin-left: 150px;
    margin-right: 150px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    gap: 0px 0px;

    .facebook-main {
      background-color: hsl(228, 28%, 20%);
      padding: 20px;
      margin-right: 20px;
      height: 190px;
      border-top: 5px solid hsl(208, 92%, 53%);
      border-radius: 8px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .social {
        display: flex;
        align-items: center;

        img {
          border-radius: 4px;
          margin-right: 10px;
        }
        p {
          font-size: 16px;
          color: hsl(228, 34%, 66%);
        }
      }

      .followers {
        display: flex;
        flex-direction: column;
        align-items: center;

        strong {
          color: #fff;
        }
        span {
          color: #cdcdcd;
          font-size: 12px;
        }
      }

      .updown {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
          padding-right: 10px;
        }
        p {
          color: hsl(163, 72%, 41%);
          font-size: 14px;
        }
      }
    }

    .twitter-main {
      background-color: hsl(228, 28%, 20%);
      padding: 20px;
      margin-right: 20px;
      height: 190px;
      border-top: 5px solid hsl(203, 89%, 53%);
      border-radius: 8px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      border-radius: 8px;
      .social {
        display: flex;
        align-items: center;

        img {
          border-radius: 4px;
          margin-right: 10px;
        }
        p {
          font-size: 16px;
          color: hsl(228, 34%, 66%);
        }
      }

      .followers {
        display: flex;
        flex-direction: column;
        align-items: center;

        strong {
          color: #fff;
        }
        span {
          color: #cdcdcd;
          font-size: 12px;
        }
      }
      .updown {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
          padding-right: 10px;
        }
        p {
          color: hsl(163, 72%, 41%);
          font-size: 14px;
        }
      }
    }

    .instagram-main {
      background-color: hsl(228, 28%, 20%);
      padding: 20px;
      margin-right: 20px;
      height: 190px;
      border-top: 5px solid #c13584;
      border-radius: 8px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .social {
        display: flex;
        align-items: center;

        img {
          border-radius: 4px;
          margin-right: 10px;
        }
        p {
          font-size: 16px;
          color: hsl(228, 34%, 66%);
        }
      }

      .followers {
        display: flex;
        flex-direction: column;
        align-items: center;

        strong {
          color: #fff;
        }
        span {
          color: #cdcdcd;
          font-size: 12px;
        }
      }

      .updown {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
          padding-right: 10px;
        }
        p {
          color: hsl(163, 72%, 41%);
          font-size: 14px;
        }
      }
    }

    .youtube-main {
      background-color: hsl(228, 28%, 20%);
      padding: 20px;
      margin-right: 20px;
      height: 190px;
      border-top: 5px solid hsl(348, 97%, 39%);
      border-radius: 8px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      border-radius: 8px;
      .social {
        display: flex;
        align-items: center;

        img {
          border-radius: 4px;
          margin-right: 10px;
        }
        p {
          font-size: 16px;
          color: hsl(228, 34%, 66%);
        }
      }

      .followers {
        display: flex;
        flex-direction: column;
        align-items: center;

        strong {
          color: #fff;
        }
        span {
          color: #cdcdcd;
          font-size: 12px;
        }
      }

      .updown {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
          padding-right: 10px;
        }
        p {
          color: hsl(356, 69%, 56%);
          font-size: 14px;
        }
      }
    }
  }

  .overview {
    display: grid;
    margin: 20px;
    margin-left: 150px;
    margin-right: 150px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 0px 0px;

    .overview-card {
      background-color: hsl(228, 28%, 20%);
      padding: 20px;
      margin-right: 20px;
      margin-bottom: 20px;
      height: 145px;
      border-radius: 8px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .upper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          font-size: 16px;
          color: hsl(228, 34%, 66%);
        }

        img {
          margin-left: 40px;
          border-radius: 4px;
        }
      }

      .lower {
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong {
          color: #fff;
        }

        .porcentage {
          margin-left: 80px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          .text-green {
            font-size: 14px;
            margin-left: 5px;
            color: hsl(163, 72%, 41%);
          }

          .text-red {
            font-size: 14px;
            margin-left: 5px;
            color: hsl(356, 69%, 56%);
          }
        }
      }
    }
  }
`;
