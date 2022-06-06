import React, { useEffect } from 'react';
import './styles/wizard-layout.scss';
import '../../../styles/globals.scss';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { usePlaceProvider } from '../../../context/place';
import { BSIconButton } from '../../BSIconButton';

export function Layout({ backPage, nextPage, pageTitle, children }) {
  const { nextDisable } = usePlaceProvider();
  const router = useRouter();
  const paths = [
    '/become-a-host/property-type',
    '/become-a-host/amenities',
    '/become-a-host/location',
    '/become-a-host/floor-plan',
    '/become-a-host/photos',
    '/become-a-host/title',
    '/become-a-host/description',
    '/become-a-host/rules',
    '/become-a-host/health-and-security',
    '/become-a-host/price',
    '/become-a-host/complete',
  ];
  const views = paths.length;
  const currentPath = paths.indexOf(router.asPath);
  const percentage = (currentPath + 1) * (100 / views);

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
            value={percentage}
          >
            {`Tu progreso: ${percentage}%`}
          </progress>
          <div className="wizard-layout-housing-handle-sections-buttons">
            <NextLink href={`/become-a-host/${backPage}`}>
              <button
                className="wizard-layout-housing-handle-sections-buttons__back"
                type="button"
              >
                Atrás
              </button>
            </NextLink>
            {currentPath !== paths.length - 1 && (
              <NextLink href={`/become-a-host/${nextPage}`}>
                <button
                  className="wizard-layout-housing-handle-sections-buttons__next"
                  type="button"
                  disabled={nextDisable}
                  style={{
                    opacity: nextDisable ? 0.5 : 1,
                    cursor: nextDisable ? 'not-allowed' : 'pointer',
                  }}
                >
                  Siguente
                </button>
              </NextLink>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Layout;
