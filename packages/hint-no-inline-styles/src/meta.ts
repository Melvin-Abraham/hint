import { Category } from '@hint/utils-types';
import { HintScope } from 'hint/dist/src/lib/enums/hint-scope';
import { HintMetadata } from 'hint/dist/src/lib/types';
import { getMessage } from './i18n.import';

const meta: HintMetadata = {
    docs: {
        category: Category.other,

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
    id: 'no-inline-styles',
    schema: [{
        additionalProperties: false,
        properties: { requireNoStyleElement: { type: 'boolean' } },
        type: ['object', 'null']
    }],
    scope: HintScope.any
};

export default meta;
