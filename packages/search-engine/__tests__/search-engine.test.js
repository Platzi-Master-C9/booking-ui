'use strict';
import { render } from '@testing-library/react';
import SizeFilter from '../src/components/Filters/SizeFilter'

describe('@booking-ui/search-engine', () => {
    test('needs tests', () => {
        const resp = render(
            <SizeFilter fullPlace={true} privateRoom={true} handleFullPlace={() => {}} handlePrivateRoom={() => {}} />
        );

        resp.debug();
    });
});
