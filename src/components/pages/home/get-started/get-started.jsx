import clsx from 'clsx';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import RiveAnimation from 'components/shared/rive-animation';

const GetStarted = () => (
  <section
    className={clsx(
      'get-started relative overflow-hidden pb-[356px] pt-[445px]',
      'xl:pb-[218px] xl:pt-[230px] lg:pb-[148px] lg:pt-[179px] sm:pb-[100px] sm:pt-[116px]'
    )}
  >
    <RiveAnimation
      className="absolute left-1/2 top-[152px] aspect-[1.87365] w-[1703px] -translate-x-1/2 xl:-top-4 xl:w-[1432px] lg:w-[1126px] sm:-top-6 sm:w-[818px]"
      src="/animations/footer.riv?updated=20240411184427"
      artboard="footer"
      intersectionRootMargin="0px 0px 600px 0px"
      animationRootMargin="0px 0px 300px 0px"
    />
    <Container
      className="pointer-events-none flex flex-col items-center justify-center"
      size="1100"
    >
      <h2
        className={clsx(
          'relative text-center font-title text-[68px] font-medium leading-[0.9] -tracking-[0.03em] text-white',
          'xl:text-[56px] xl:leading-none xl:tracking-extra-tight lg:text-[44px] sm:text-[32px]'
        )}
      >
        Features of tomorrow.
        <br /> Available today.
      </h2>
      <Button
        className="pointer-events-auto relative mt-9 !font-semibold tracking-tighter xl:mt-8 lg:mt-7 sm:mt-5"
        size="lg"
        theme="green-outline"
        to="#"
      >
        Get Started
      </Button>
    </Container>
  </section>
);

export default GetStarted;
