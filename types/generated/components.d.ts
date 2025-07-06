import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAgentItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_agent_items';
  info: {
    displayName: 'agent-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    location: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    phone_number: Schema.Attribute.String;
  };
}

export interface SharedFooterItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_items';
  info: {
    displayName: 'footer-item';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLegislationItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_legislation_items';
  info: {
    displayName: 'legislation-item';
  };
  attributes: {
    content: Schema.Attribute.Text;
    document_type: Schema.Attribute.String & Schema.Attribute.Required;
    effect_date: Schema.Attribute.Date & Schema.Attribute.Required;
    link_download: Schema.Attribute.String;
    publish_date: Schema.Attribute.Date & Schema.Attribute.Required;
    symbol_number: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    description: '';
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSupportItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_support_items';
  info: {
    displayName: 'support-item';
    icon: 'sun';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link_download: Schema.Attribute.String;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    rank: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
  };
}

export interface SharedWrapSupportItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_wrap_support_items';
  info: {
    displayName: 'wrap-support-item';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    rank: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    support_item: Schema.Attribute.Component<'shared.support-item', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.agent-item': SharedAgentItem;
      'shared.footer-item': SharedFooterItem;
      'shared.legislation-item': SharedLegislationItem;
      'shared.media': SharedMedia;
      'shared.meta-social': SharedMetaSocial;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.support-item': SharedSupportItem;
      'shared.wrap-support-item': SharedWrapSupportItem;
    }
  }
}
