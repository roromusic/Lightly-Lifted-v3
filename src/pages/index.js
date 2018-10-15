import React from 'react'
import { Link } from 'gatsby'
import styled, { css as emoCSS } from 'react-emotion'
import cocktail from '../images/cocktail.png'
import hand from '../images/hand.png'
import party from '../images/party.jpg'
import yoga from '../images/yoga.png'
import bartender from '../images/bartender.png'
import faces from '../images/faces.jpg'

import Layout from '../components/layout'

const css = (...args) => ({ className: emoCSS(...args) })

const Outer = styled('div')(props => ({
  backgroundColor: props.bgColor,
}))

const Inner = styled('div')(props => ({
  maxWidth: '960px',
  margin: '0 auto',
  padding: '1.45rem 1.0875rem',
  backgroundColor: props.bgColor,
}))

const FlexContent = styled('div')(props => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '40px 0',
  alignItems: 'center',

  '@media (min-width: 700px)': {
    flexDirection: 'row',
  },
}))

const FlexItem = styled('div')({
  textAlign: 'center',
  margin: '20px',

  '@media (min-width: 700px)': {
    width: '50%',
  },
})

const Button = styled('button')({
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid white',
  backgroundColor: 'transparent',
  color: 'white',
  outline: 'none',
})

const IndexPage = () => (
  <Layout>
    <Outer bgColor="var(--yellow)">
      <Inner>
        <div
          {...css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          })}
        >
          <h1>
            Imagine a world where every cannabis experience is just right.
          </h1>
          <img
            src={cocktail}
            alt="cocktail"
            {...css({
              width: '250px',
              margin: '20px 0',
            })}
          />
        </div>
      </Inner>
    </Outer>
    <Outer bgColor="var(--green)">
      <Inner>
        <FlexContent>
          <FlexItem>
            <h2>Splash, sip and feel just right.</h2>
            <p>
              Lightly Lifted is a beverage enhancer that you splash into any
              drink. It adds a mild amount of cannabis - for that "just-right"
              feeling.
            </p>
          </FlexItem>
          <FlexItem>
            <img
              src={cocktail}
              alt="cocktail"
              {...css({
                margin: 0,
                width: '250px',
              })}
            />
          </FlexItem>
        </FlexContent>
        <FlexContent>
          <FlexItem>
            <img
              src={hand}
              alt="bottle above hand"
              {...css({
                width: '330px',
                margin: 0,
              })}
            />
          </FlexItem>
          <FlexItem>
            <h2>Get ready for a gentle lift, where you can:</h2>
            <ul {...css({ textAlign: 'left' })}>
              <li>Mix the amount that's right for you</li>
              <li>Share new experiences</li>
              <li>Enhance your every mood</li>
              <li>Brighten the everyday</li>
            </ul>
          </FlexItem>
        </FlexContent>
      </Inner>
    </Outer>
    <Outer bgColor="var(--pink)" {...css({ position: 'relative' })}>
      <Inner {...css({ padding: 0 })}>
        <div
          {...css({
            background: `url(${party}) no-repeat top center`,
            height: '600px',
            textAlign: 'center',
            backgroundSize: 'cover',
          })}
        >
          <div
            {...css({
              content: `""`,
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              backgroundColor: 'rgba(0,0,0,0.1)',
            })}
          />
          <h2 {...css({ padding: '10px', position: 'relative' })}>
            Lightly Lifted is a cleaner, more sophisticated way to celebrate
            special occasions and enjoy the day-to-day.
          </h2>
        </div>
      </Inner>
    </Outer>
    <Outer
      bgcolor="none"
      {...css({
        backgroundColor: 'var(--yellow)',
        backgroundImage: 'linear-gradient(var(--green) 50%, var(--yellow) 50%)',
        position: 'relative',
        overflow: 'hidden',

        ':after': {
          content: `''`,
          height: '10%',
          width: '100%',
          position: 'absolute',
          top: '50%',
          left: 0,
          backgroundImage:
            'linear-gradient(to top left, var(--yellow) 50%, var(--green) 50%)',
          transform: 'translateY(-50%)',
        },

        '@media (min-width: 1024px)': {
          ':after': {
            height: '25%',
          },
        },
      })}
    >
      <Inner {...css({ position: 'relative', zIndex: '1' })}>
        <FlexContent>
          <FlexItem>
            <h2>Calm Your Mind, Don't Lose It</h2>
            <p>
              As a water-based infusion, it gives a light lift without the side
              effects of smoke, chemicals or sugary additives. You can mix,
              stir, blend and shake this liquid form of cannabis into any
              beverage you choose.
            </p>
            <Button>Get Lightly Lifted</Button>
          </FlexItem>
          <FlexItem>
            <img
              src={yoga}
              alt="yoga pose"
              {...css({
                width: '250px',
                margin: '20px 0',
              })}
            />
          </FlexItem>
        </FlexContent>
        <FlexContent>
          <FlexItem>
            <p>
              These are exciting times. Cannabis is legal, and a new market is
              taking shape. If you’ve tried vape pens, chocolates, gummies, and
              found these products go too far, Lightly Lifted offers a new way
              to consume cannabis as a liquid infusion. Just a few splashes will
              brighten your day.{' '}
            </p>
          </FlexItem>
          <FlexItem
            {...css({
              position: 'relative',
              ':after': {
                content: `''`,
                position: 'absolute',
                bottom: '-100px',
                right: '-80px',
                height: '200px',
                width: '200px',
                background: `url(${bartender}) no-repeat bottom right`,
                backgroundSize: 'contain',
                zIndex: -1,
              },
            })}
          >
            <h2>Why You'll Love Lightly Lifted:</h2>
            <ul {...css({ textAlign: 'left' })}>
              <li>Predictable and repeatable experience</li>
              <li>Takes effect more quickly than edibles</li>
              <li>Convenient and portable</li>
              <li>You can mix it into just about any drink</li>
            </ul>
          </FlexItem>
        </FlexContent>
      </Inner>
    </Outer>
    <Outer bgColor="pink">
      <Inner
        {...css({
          '@media (min-width: 700px)': {
            padding: 0,
          },
        })}
      >
        <FlexContent
          {...css({
            '@media (min-width: 700px)': {
              margin: 0,
            },
          })}
        >
          <FlexItem
            {...css({
              '@media (min-width: 700px)': {
                width: '40%',
              },
            })}
          >
            <p>
              LIGHTLY LIFTED IS AN INVITATION TO GET CREATIVE. HERE ARE SOME
              WAYS WE LIKE TO MIX IT.
            </p>
            <Button>GIN & CHRONIC, CANNABUCHA, POT SHOTS, AND MORE</Button>
          </FlexItem>

          <FlexItem
            {...css({
              width: '100vw',
              '@media (min-width: 700px)': {
                width: '60%',
                margin: 0,
              },
            })}
          >
            <img
              src={faces}
              alt="party people"
              {...css({
                margin: '20px 0 0',
                display: 'block',
                '@media (min-width: 700px)': {
                  margin: 0,
                },
              })}
            />
          </FlexItem>
        </FlexContent>
      </Inner>
    </Outer>
  </Layout>
)

export default IndexPage
