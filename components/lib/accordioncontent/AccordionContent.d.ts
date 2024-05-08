/**
 *
 * AccordionContent is a helper component for Accordion component.
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 *
 * @module accordioncontent
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, DesignToken, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type AccordionContentPassThroughOptionType = AccordionContentPassThroughAttributes | ((options: AccordionContentPassThroughMethodOptions) => AccordionContentPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface AccordionContentPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: AccordionContentProps;
    /**
     * Defines current options.
     */
    context: AccordionContentContext;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link AccordionContentProps.pt}
 */
export interface AccordionContentPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AccordionContentPassThroughOptionType;
    /**
     * Used to pass attributes to the transition's DOM element.
     */
    transition?: AccordionContentPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: AccordionContentPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

export interface AccordionContentPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in AccordionContent component.
 */
export interface AccordionContentProps {
    /**
     * Use to change the HTML tag of root element.
     * @defaultValue DIV
     */
    as?: string | undefined;
    /**
     * When enabled, it changes the default rendered element for the one passed as a child element.
     * @defaultValue false
     */
    asChild?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {AccordionContentPassThroughOptions}
     */
    pt?: PassThrough<AccordionContentPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Defines current options in AccordionContent component.
 */
export interface AccordionContentContext {
    /**
     * Whether the item is active.
     */
    active: boolean;
}

/**
 * Defines valid slots in AccordionContent slots.
 */
export interface AccordionContentSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
}

export interface AccordionContentEmits {}

/**
 * **PrimeVue - AccordionContent**
 *
 * _AccordionContent is a helper component for Accordion component._
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class AccordionContent extends ClassComponent<AccordionContentProps, AccordionContentSlots, AccordionContentEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        AccordionContent: GlobalComponentConstructor<AccordionContent>;
    }
}

export default AccordionContent;