import { rxLocalhost } from '@hint/utils-network/dist/src/rx-localhost';
import { Category } from '@hint/utils-types';
import { HintMetadata, HintScope } from 'hint';

import { getMessage } from './i18n.import';

const meta: HintMetadata = {
    docs: {
        category: Category.security,
        description: getMessage('description', 'en'),
        name: getMessage('name', 'en')
    },
    /* istanbul ignore next */
    getDescription(language: string) {
        return getMessage('description', language);
    },
    /* istanbul ignore next */
    getName(language: string) {
        return getMessage('name', language);
    },
    id: 'strict-transport-security',
    ignoredUrls: [rxLocalhost],
    schema: [{
        properties: {
            checkPreload: { type: 'boolean' },
            minMaxAgeValue: { type: 'number' }
        }
    }],
    scope: HintScope.site
};

export default meta;
