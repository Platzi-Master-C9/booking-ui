import React from 'react';
import './styles/wizard-layout.scss';
import '../../../styles/globals.scss';
import NextLink from 'next/link';
import { usePlaceProvider } from '../../../context/place';
import { BSIconButton } from '../../BSIconButton';

export function Layout({ backPage, nextPage, pageTitle, children }) {
  const {
    progress,
    handleBack,
    handleNext,
    nextDisable,
  } = usePlaceProvider();

  return (
    <main className="wizard-layout">
      <div className="wizard-layout-section">
        <BSIconButton bg="secondary" />
        <h2 className="wizard-layout-section__title">{pageTitle}</h2>
      </div>
      <div className="wizard-layout-housing">
        <div className="wizard-layout-housing-options">{children}</div>
        <div className="wizard-layout-housing-handle-sections">
          <progress
            className="wizard-layout-housing-handle-sections__progress-bar"
            max="100"
            value={progress}
          >
            {`Tu progreso: ${progress}%`}
          </progress>
          <div className="wizard-layout-housing-handle-sections-buttons">
            <NextLink href={`/places/become-a-host/${backPage}`} passHref>
              <button
                className="wizard-layout-housing-handle-sections-buttons__back"
                type="button"
                onClick={handleBack}
              >
                Atrás
              </button>
            </NextLink>
            <NextLink href={`/places/become-a-host/${nextPage}`} passHref>
              <button
                className="wizard-layout-housing-handle-sections-buttons__next"
                type="button"
                onClick={handleNext}
                disabled={nextDisable}
                style={{
                  opacity: nextDisable ? 0.5 : 1,
                  cursor: nextDisable ? 'not-allowed' : 'pointer',
                }}
              >
                Siguente
              </button>
            </NextLink>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Layout;
