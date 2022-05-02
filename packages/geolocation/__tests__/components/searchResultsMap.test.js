import React from 'react';
import { mount, render } from 'enzyme';
import { MapMarker } from '../src/components/SearchResultsMap/MapMarker';
import { MarkerCard } from '../src/components/SearchResultsMap/MarkerCard';
import { CardRating } from '../src/components/SearchResultsMap/MarkerCard/CardRating';
import { CardTitle } from '../src/components/SearchResultsMap/MarkerCard/CardTitle';
import { CardPrice } from '../src/components/SearchResultsMap/MarkerCard/CardPrice';
import { SearchResultsMap } from '../src/components/SearchResultsMap';
import { PlacesMock } from '../__mocks__/PlacesMock';

describe('<MapCard />', () => {
  const card = mount(<MarkerCard place={PlacesMock[0]} />);

  it("should show the place's name", () => {
    expect(
      card
        .find(<CardTitle />)
        .find('p')
        .first()
    ).toBe(PlacesMock[0].title);
  });

  it("should show place's price", () => {
    expect(
      card
        .find(<CardPrice />)
        .find('p')
        .first()
    ).toBe(PlacesMock[0].price);
  });

  it("should show places's rating", () => {
    expect(
      card
        .find(<CardRating />)
        .find('p')
        .first()
    ).toBe(PlacesMock[0].rating);
  });

  it("should show place's reviews", () => {
    expect(
      card
        .find(<CardRating />)
        .find('p')
        .last()
    ).toBe(PlacesMock[0].reviews);
  });

  it("should show place's type", () => {
    expect(
      card
        .find(<CardTitle />)
        .find('p')
        .last()
    ).toBe(PlacesMock[0].type);
  });
});

describe('<MapMarker />', () => {
  const marker = mount(
    <MapMarker text={PlacesMock[0].price} place={PlacesMock[0]} />
  );

  it('should show the price value', () => {
    expect(marker.find('p').first().text()).toBe(PlacesMock[0].price);
  });

  it('should show place card given a user click', () => {
    marker.simulate('click');
    expect(marker.find(<MarkerCard />)).to.have.lengthOf(1);
  });
});

describe('<SearchResultsMap />', () => {
  const map = render(<SearchResultsMap initPlaces={PlacesMock} />);

  it('should display 7 markers', () => {
    expect(map.find(<MapMarker />)).to.have.lengthOf(PlacesMock.length);
  });
});
