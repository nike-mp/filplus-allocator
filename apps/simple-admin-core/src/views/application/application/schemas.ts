import type { VxeGridProps } from '#/adapter/vxe-table';

import { h } from 'vue';

import { type VbenFormProps } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { z } from '#/adapter/form';


import { message, Switch } from 'ant-design-vue';
import { updateApplication } from '#/api/application/application';

const country_data = [
  {
    label: 'Afghanistan',
    value: 'Afghanistan',
  },
  {
    label: 'Åland Islands',
    value: 'Åland Islands',
  },
  {
    label: 'Albania',
    value: 'Albania',
  },
  {
    label: 'Algeria',
    value: 'Algeria',
  },
  {
    label: 'American Samoa',
    value: 'American Samoa',
  },
  {
    label: 'Andorra',
    value: 'Andorra',
  },
  {
    label: 'Angola',
    value: 'Angola',
  },
  {
    label: 'Anguilla',
    value: 'Anguilla',
  },
  {
    label: 'Antarctica',
    value: 'Antarctica',
  },
  {
    label: 'Antigua and Barbuda',
    value: 'Antigua and Barbuda',
  },
  {
    label: 'Argentina',
    value: 'Argentina',
  },
  {
    label: 'Armenia',
    value: 'Armenia',
  },
  {
    label: 'Aruba',
    value: 'Aruba',
  },
  {
    label: 'Australia',
    value: 'Australia',
  },
  {
    label: 'Austria',
    value: 'Austria',
  },
  {
    label: 'Azerbaijan',
    value: 'Azerbaijan',
  },
  {
    label: 'Bahamas',
    value: 'Bahamas',
  },
  {
    label: 'Bahrain',
    value: 'Bahrain',
  },
  {
    label: 'Bangladesh',
    value: 'Bangladesh',
  },
  {
    label: 'Barbados',
    value: 'Barbados',
  },
  {
    label: 'Belarus',
    value: 'Belarus',
  },
  {
    label: 'Belgium',
    value: 'Belgium',
  },
  {
    label: 'Belize',
    value: 'Belize',
  },
  {
    label: 'Benin',
    value: 'Benin',
  },
  {
    label: 'Bermuda',
    value: 'Bermuda',
  },
  {
    label: 'Bhutan',
    value: 'Bhutan',
  },
  {
    label: 'Bolivia',
    value: 'Bolivia',
  },
  {
    label: 'Bonaire, Sint Eustatius and Saba',
    value: 'Bonaire, Sint Eustatius and Saba',
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'Bosnia and Herzegovina',
  },
  {
    label: 'Botswana',
    value: 'Botswana',
  },
  {
    label: 'Bouvet Island',
    value: 'Bouvet Island',
  },
  {
    label: 'Brazil',
    value: 'Brazil',
  },
  {
    label: 'British Indian Ocean Territory',
    value: 'British Indian Ocean Territory',
  },
  {
    label: 'Brunei Darussalam',
    value: 'Brunei Darussalam',
  },
  {
    label: 'Bulgaria',
    value: 'Bulgaria',
  },
  {
    label: 'Burkina Faso',
    value: 'Burkina Faso',
  },
  {
    label: 'Burundi',
    value: 'Burundi',
  },
  {
    label: 'Cambodia',
    value: 'Cambodia',
  },
  {
    label: 'Cameroon',
    value: 'Cameroon',
  },
  {
    label: 'Canada',
    value: 'Canada',
  },
  {
    label: 'Cape Verde',
    value: 'Cape Verde',
  },
  {
    label: 'Cayman Islands',
    value: 'Cayman Islands',
  },
  {
    label: 'Central African Republic',
    value: 'Central African Republic',
  },
  {
    label: 'Chad',
    value: 'Chad',
  },
  {
    label: 'Chile',
    value: 'Chile',
  },
  {
    label: 'China',
    value: 'China',
  },
  {
    label: 'Christmas Island',
    value: 'Christmas Island',
  },
  {
    label: 'Cocos (Keeling) Islands',
    value: 'Cocos (Keeling) Islands',
  },
  {
    label: 'Colombia',
    value: 'Colombia',
  },
  {
    label: 'Comoros',
    value: 'Comoros',
  },
  {
    label: 'Congo',
    value: 'Congo',
  },
  {
    label: 'Congo, the Democratic Republic of the',
    value: 'Congo, the Democratic Republic of the',
  },
  {
    label: 'Cook Islands',
    value: 'Cook Islands',
  },
  {
    label: 'Costa Rica',
    value: 'Costa Rica',
  },
  {
    label: "Côte d'Ivoire",
    value: "Côte d'Ivoire",
  },
  {
    label: 'Croatia',
    value: 'Croatia',
  },
  {
    label: 'Cuba',
    value: 'Cuba',
  },
  {
    label: 'Curaçao',
    value: 'Curaçao',
  },
  {
    label: 'Cyprus',
    value: 'Cyprus',
  },
  {
    label: 'Czech Republic',
    value: 'Czech Republic',
  },
  {
    label: 'Denmark',
    value: 'Denmark',
  },
  {
    label: 'Djibouti',
    value: 'Djibouti',
  },
  {
    label: 'Dominica',
    value: 'Dominica',
  },
  {
    label: 'Dominican Republic',
    value: 'Dominican Republic',
  },
  {
    label: 'Ecuador',
    value: 'Ecuador',
  },
  {
    label: 'Egypt',
    value: 'Egypt',
  },
  {
    label: 'El Salvador',
    value: 'El Salvador',
  },
  {
    label: 'Equatorial Guinea',
    value: 'Equatorial Guinea',
  },
  {
    label: 'Eritrea',
    value: 'Eritrea',
  },
  {
    label: 'Estonia',
    value: 'Estonia',
  },
  {
    label: 'Ethiopia',
    value: 'Ethiopia',
  },
  {
    label: 'Falkland Islands (Malvinas)',
    value: 'Falkland Islands (Malvinas)',
  },
  {
    label: 'Faroe Islands',
    value: 'Faroe Islands',
  },
  {
    label: 'Fiji',
    value: 'Fiji',
  },
  {
    label: 'Finland',
    value: 'Finland',
  },
  {
    label: 'France',
    value: 'France',
  },
  {
    label: 'French Guiana',
    value: 'French Guiana',
  },
  {
    label: 'French Polynesia',
    value: 'French Polynesia',
  },
  {
    label: 'French Southern Territories',
    value: 'French Southern Territories',
  },
  {
    label: 'Gabon',
    value: 'Gabon',
  },
  {
    label: 'Gambia',
    value: 'Gambia',
  },
  {
    label: 'Georgia',
    value: 'Georgia',
  },
  {
    label: 'Germany',
    value: 'Germany',
  },
  {
    label: 'Ghana',
    value: 'Ghana',
  },
  {
    label: 'Gibraltar',
    value: 'Gibraltar',
  },
  {
    label: 'Greece',
    value: 'Greece',
  },
  {
    label: 'Greenland',
    value: 'Greenland',
  },
  {
    label: 'Grenada',
    value: 'Grenada',
  },
  {
    label: 'Guadeloupe',
    value: 'Guadeloupe',
  },
  {
    label: 'Guam',
    value: 'Guam',
  },
  {
    label: 'Guatemala',
    value: 'Guatemala',
  },
  {
    label: 'Guernsey',
    value: 'Guernsey',
  },
  {
    label: 'Guinea',
    value: 'Guinea',
  },
  {
    label: 'Guinea-Bissau',
    value: 'Guinea-Bissau',
  },
  {
    label: 'Guyana',
    value: 'Guyana',
  },
  {
    label: 'Haiti',
    value: 'Haiti',
  },
  {
    label: 'Heard Island and McDonald Islands',
    value: 'Heard Island and McDonald Islands',
  },
  {
    label: 'Holy See (Vatican City State)',
    value: 'Holy See (Vatican City State)',
  },
  {
    label: 'Honduras',
    value: 'Honduras',
  },
  {
    label: 'Hong Kong',
    value: 'Hong Kong',
  },
  {
    label: 'Hungary',
    value: 'Hungary',
  },
  {
    label: 'Iceland',
    value: 'Iceland',
  },
  {
    label: 'India',
    value: 'India',
  },
  {
    label: 'Indonesia',
    value: 'Indonesia',
  },
  {
    label: 'Iran, Islamic Republic of',
    value: 'Iran, Islamic Republic of',
  },
  {
    label: 'Iraq',
    value: 'Iraq',
  },
  {
    label: 'Ireland',
    value: 'Ireland',
  },
  {
    label: 'Isle of Man',
    value: 'Isle of Man',
  },
  {
    label: 'Israel',
    value: 'Israel',
  },
  {
    label: 'Italy',
    value: 'Italy',
  },
  {
    label: 'Jamaica',
    value: 'Jamaica',
  },
  {
    label: 'Japan',
    value: 'Japan',
  },
  {
    label: 'Jersey',
    value: 'Jersey',
  },
  {
    label: 'Jordan',
    value: 'Jordan',
  },
  {
    label: 'Kazakhstan',
    value: 'Kazakhstan',
  },
  {
    label: 'Kenya',
    value: 'Kenya',
  },
  {
    label: 'Kiribati',
    value: 'Kiribati',
  },
  {
    label: "Korea, Democratic People's Republic of",
    value: "Korea, Democratic People's Republic of",
  },
  {
    label: 'Korea, Republic of',
    value: 'Korea, Republic of',
  },
  {
    label: 'Kuwait',
    value: 'Kuwait',
  },
  {
    label: 'Kyrgyzstan',
    value: 'Kyrgyzstan',
  },
  {
    label: "Lao People's Democratic Republic",
    value: "Lao People's Democratic Republic",
  },
  {
    label: 'Latvia',
    value: 'Latvia',
  },
  {
    label: 'Lebanon',
    value: 'Lebanon',
  },
  {
    label: 'Lesotho',
    value: 'Lesotho',
  },
  {
    label: 'Liberia',
    value: 'Liberia',
  },
  {
    label: 'Libya',
    value: 'Libya',
  },
  {
    label: 'Liechtenstein',
    value: 'Liechtenstein',
  },
  {
    label: 'Lithuania',
    value: 'Lithuania',
  },
  {
    label: 'Luxembourg',
    value: 'Luxembourg',
  },
  {
    label: 'Macao',
    value: 'Macao',
  },
  {
    label: 'Macedonia, the Former Yugoslav Republic of',
    value: 'Macedonia, the Former Yugoslav Republic of',
  },
  {
    label: 'Madagascar',
    value: 'Madagascar',
  },
  {
    label: 'Malawi',
    value: 'Malawi',
  },
  {
    label: 'Malaysia',
    value: 'Malaysia',
  },
  {
    label: 'Maldives',
    value: 'Maldives',
  },
  {
    label: 'Mali',
    value: 'Mali',
  },
  {
    label: 'Malta',
    value: 'Malta',
  },
  {
    label: 'Marshall Islands',
    value: 'Marshall Islands',
  },
  {
    label: 'Martinique',
    value: 'Martinique',
  },
  {
    label: 'Mauritania',
    value: 'Mauritania',
  },
  {
    label: 'Mauritius',
    value: 'Mauritius',
  },
  {
    label: 'Mayotte',
    value: 'Mayotte',
  },
  {
    label: 'Mexico',
    value: 'Mexico',
  },
  {
    label: 'Micronesia, Federated States of',
    value: 'Micronesia, Federated States of',
  },
  {
    label: 'Moldova, Republic of',
    value: 'Moldova, Republic of',
  },
  {
    label: 'Monaco',
    value: 'Monaco',
  },
  {
    label: 'Mongolia',
    value: 'Mongolia',
  },
  {
    label: 'Montenegro',
    value: 'Montenegro',
  },
  {
    label: 'Montserrat',
    value: 'Montserrat',
  },
  {
    label: 'Morocco',
    value: 'Morocco',
  },
  {
    label: 'Mozambique',
    value: 'Mozambique',
  },
  {
    label: 'Myanmar',
    value: 'Myanmar',
  },
  {
    label: 'Namibia',
    value: 'Namibia',
  },
  {
    label: 'Nauru',
    value: 'Nauru',
  },
  {
    label: 'Nepal',
    value: 'Nepal',
  },
  {
    label: 'Netherlands',
    value: 'Netherlands',
  },
  {
    label: 'New Caledonia',
    value: 'New Caledonia',
  },
  {
    label: 'New Zealand',
    value: 'New Zealand',
  },
  {
    label: 'Nicaragua',
    value: 'Nicaragua',
  },
  {
    label: 'Niger',
    value: 'Niger',
  },
  {
    label: 'Nigeria',
    value: 'Nigeria',
  },
  {
    label: 'Niue',
    value: 'Niue',
  },
  {
    label: 'Norfolk Island',
    value: 'Norfolk Island',
  },
  {
    label: 'Northern Mariana Islands',
    value: 'Northern Mariana Islands',
  },
  {
    label: 'Norway',
    value: 'Norway',
  },
  {
    label: 'Oman',
    value: 'Oman',
  },
  {
    label: 'Pakistan',
    value: 'Pakistan',
  },
  {
    label: 'Palau',
    value: 'Palau',
  },
  {
    label: 'Palestine, State of',
    value: 'Palestine, State of',
  },
  {
    label: 'Panama',
    value: 'Panama',
  },
  {
    label: 'Papua New Guinea',
    value: 'Papua New Guinea',
  },
  {
    label: 'Paraguay',
    value: 'Paraguay',
  },
  {
    label: 'Peru',
    value: 'Peru',
  },
  {
    label: 'Philippines',
    value: 'Philippines',
  },
  {
    label: 'Pitcairn',
    value: 'Pitcairn',
  },
  {
    label: 'Poland',
    value: 'Poland',
  },
  {
    label: 'Portugal',
    value: 'Portugal',
  },
  {
    label: 'Puerto Rico',
    value: 'Puerto Rico',
  },
  {
    label: 'Qatar',
    value: 'Qatar',
  },
  {
    label: 'Réunion',
    value: 'Réunion',
  },
  {
    label: 'Romania',
    value: 'Romania',
  },
  {
    label: 'Russian Federation',
    value: 'Russian Federation',
  },
  {
    label: 'Rwanda',
    value: 'Rwanda',
  },
  {
    label: 'Saint Barthélemy',
    value: 'Saint Barthélemy',
  },
  {
    label: 'Saint Helena, Ascension and Tristan da Cunha',
    value: 'Saint Helena, Ascension and Tristan da Cunha',
  },
  {
    label: 'Saint Kitts and Nevis',
    value: 'Saint Kitts and Nevis',
  },
  {
    label: 'Saint Lucia',
    value: 'Saint Lucia',
  },
  {
    label: 'Saint Martin (French part)',
    value: 'Saint Martin (French part)',
  },
  {
    label: 'Saint Pierre and Miquelon',
    value: 'Saint Pierre and Miquelon',
  },
  {
    label: 'Saint Vincent and the Grenadines',
    value: 'Saint Vincent and the Grenadines',
  },
  {
    label: 'Samoa',
    value: 'Samoa',
  },
  {
    label: 'San Marino',
    value: 'San Marino',
  },
  {
    label: 'Sao Tome and Principe',
    value: 'Sao Tome and Principe',
  },
  {
    label: 'Saudi Arabia',
    value: 'Saudi Arabia',
  },
  {
    label: 'Senegal',
    value: 'Senegal',
  },
  {
    label: 'Serbia',
    value: 'Serbia',
  },
  {
    label: 'Seychelles',
    value: 'Seychelles',
  },
  {
    label: 'Sierra Leone',
    value: 'Sierra Leone',
  },
  {
    label: 'Singapore',
    value: 'Singapore',
  },
  {
    label: 'Sint Maarten (Dutch part)',
    value: 'Sint Maarten (Dutch part)',
  },
  {
    label: 'Slovakia',
    value: 'Slovakia',
  },
  {
    label: 'Slovenia',
    value: 'Slovenia',
  },
  {
    label: 'Solomon Islands',
    value: 'Solomon Islands',
  },
  {
    label: 'Somalia',
    value: 'Somalia',
  },
  {
    label: 'South Africa',
    value: 'South Africa',
  },
  {
    label: 'South Georgia and the South Sandwich Islands',
    value: 'South Georgia and the South Sandwich Islands',
  },
  {
    label: 'South Sudan',
    value: 'South Sudan',
  },
  {
    label: 'Spain',
    value: 'Spain',
  },
  {
    label: 'Sri Lanka',
    value: 'Sri Lanka',
  },
  {
    label: 'Sudan',
    value: 'Sudan',
  },
  {
    label: 'Suriname',
    value: 'Suriname',
  },
  {
    label: 'Svalbard and Jan Mayen',
    value: 'Svalbard and Jan Mayen',
  },
  {
    label: 'Swaziland',
    value: 'Swaziland',
  },
  {
    label: 'Sweden',
    value: 'Sweden',
  },
  {
    label: 'Switzerland',
    value: 'Switzerland',
  },
  {
    label: 'Syrian Arab Republic',
    value: 'Syrian Arab Republic',
  },
  {
    label: 'Taiwan',
    value: 'Taiwan',
  },
  {
    label: 'Tajikistan',
    value: 'Tajikistan',
  },
  {
    label: 'Tanzania, United Republic of',
    value: 'Tanzania, United Republic of',
  },
  {
    label: 'Thailand',
    value: 'Thailand',
  },
  {
    label: 'Timor-Leste',
    value: 'Timor-Leste',
  },
  {
    label: 'Togo',
    value: 'Togo',
  },
  {
    label: 'Tokelau',
    value: 'Tokelau',
  },
  {
    label: 'Tonga',
    value: 'Tonga',
  },
  {
    label: 'Trinidad and Tobago',
    value: 'Trinidad and Tobago',
  },
  {
    label: 'Tunisia',
    value: 'Tunisia',
  },
  {
    label: 'Turkey',
    value: 'Turkey',
  },
  {
    label: 'Turkmenistan',
    value: 'Turkmenistan',
  },
  {
    label: 'Turks and Caicos Islands',
    value: 'Turks and Caicos Islands',
  },
  {
    label: 'Tuvalu',
    value: 'Tuvalu',
  },
  {
    label: 'Uganda',
    value: 'Uganda',
  },
  {
    label: 'Ukraine',
    value: 'Ukraine',
  },
  {
    label: 'United Arab Emirates',
    value: 'United Arab Emirates',
  },
  {
    label: 'United Kingdom',
    value: 'United Kingdom',
  },
  {
    label: 'United States',
    value: 'United States',
  },
  {
    label: 'United States Minor Outlying Islands',
    value: 'United States Minor Outlying Islands',
  },
  {
    label: 'Uruguay',
    value: 'Uruguay',
  },
  {
    label: 'Uzbekistan',
    value: 'Uzbekistan',
  },
  {
    label: 'Vanuatu',
    value: 'Vanuatu',
  },
  {
    label: 'Venezuela, Bolivarian Republic of',
    value: 'Venezuela, Bolivarian Republic of',
  },
  {
    label: 'Viet Nam',
    value: 'Viet Nam',
  },
  {
    label: 'Virgin Islands, British',
    value: 'Virgin Islands, British',
  },
  {
    label: 'Virgin Islands, U.S.',
    value: 'Virgin Islands, U.S.',
  },
  {
    label: 'Wallis and Futuna',
    value: 'Wallis and Futuna',
  },
  {
    label: 'Western Sahara',
    value: 'Western Sahara',
  },
  {
    label: 'Yemen',
    value: 'Yemen',
  },
  {
    label: 'Zambia',
    value: 'Zambia',
  },
  {
    label: 'Zimbabwe',
    value: 'Zimbabwe',
  },
];

export const tableColumns: VxeGridProps = {
  columns: [
    // {
    //   type: 'checkbox',
    //   width: 60,
    // },
  {
    title: 'ID',
    field: 'id',
  },
  {
    title: $t('application.application.applicant'),
    field: 'applicant',
  },
  {
    title: $t('application.application.owner'),
    field: 'owner',
  },
  {
    title: $t('application.application.country'),
    field: 'country',
  },
  {
    title: $t('application.application.industry'),
    field: 'industry',
  },
  {
    title: $t('application.application.website'),
    field: 'website',
  },
  {
    title: $t('application.application.social'),
    field: 'social',
  },
  {
    title: $t('application.application.socialType'),
    field: 'socialType',
  },
  {
    title: $t('application.application.role'),
    field: 'role',
  },
  {
    title: $t('application.application.totalAmount'),
    field: 'totalAmount',
    formatter: (e)=>{
      return `${e.row.totalAmount / 1024}PiB`
    },
  },
  {
    title: $t('application.application.expectedSize'),
    field: 'expectedSize',
  },
  {
    title: $t('application.application.replicas'),
    field: 'replicas',
  },
  {
    title: $t('application.application.weeklyAllocation'),
    field: 'weeklyAllocation',
  },
  {
    title: $t('application.application.address'),
    field: 'address',
  },
  {
    title: $t('application.application.dataType'),
    field: 'dataType',
  },
  {
    title: $t('application.application.identifier'),
    field: 'identifier',
  },
  {
    title: $t('application.application.progress'),
    field: 'progress',
  },
    // {
    //   title: $t('common.status'),
    //   field: 'status',
    //   slots: {
    //     default: (e) =>
    //       h(Switch, {
    //         checked: e.row.status === 1,
    //         onClick: () => {
    //           const newStatus = e.row.status === 1 ? 2 : 1;
    //           updateApplication({ id: e.row.id, status: newStatus }).then(() => {
    //             e.row.status = newStatus;
    //           });
    //         },
    //       }),
    //   },
    // },

    {
      title: $t('common.createTime'),
      field: 'createdAt',
      formatter: 'formatDateTime',
    },

  ],
};

export const searchFormSchemas: VbenFormProps = {
  schema: [
  {
    fieldName: 'userId',
    label: $t('application.application.userId'),
    component: 'Input',
     },
  ],
};

export const dataFormSchemas: VbenFormProps = {
  schema: [
    {
      fieldName: 'id',
      label: 'ID',
      component: 'Input',
      dependencies: {
        show: false,
        triggerFields: ['id'],
      },
    },
  {
    fieldName: 'applicant',
    label: $t('application.application.applicant'),
    component: 'Input',
    rules: 'required',
  },
  {
    fieldName: 'owner',
    label: $t('application.application.owner'),
    component: 'Input',
    rules: 'required',
  },
  {
    fieldName: 'country',
    label: $t('application.application.country'),
    component: 'Select',
    componentProps: {
      allowClear: true,
      filterOption: true,
      options: country_data,
      // defaultValue: 'Afghanistan',
      placeholder: $t('application.application.select'),
      showSearch: true,
      class: 'w-full',
    },
    rules: 'selectRequired',
  },
  {
    fieldName: 'industry',
    label: $t('application.application.industry'),
    component: 'Select',
    componentProps: {
      allowClear: true,
      filterOption: true,
      options: [
        {
          label: 'Life Science / Healthcare',
          value: 'Life Science / Healthcare',
        },
        {
          label: 'Arts & Recreation',
          value: 'Arts & Recreation',
        },
        {
          label: 'Education & Training',
          value: 'Education & Training',
        },
        {
          label: 'Environment',
          value: 'Environment',
        },
        {
          label: 'Web3 / Crypto',
          value: 'Web3 / Crypto',
        },
        {
          label: 'IT & Technology Services',
          value: 'IT & Technology Services',
        },
        {
          label: 'Professional Services (Legal, Consulting, Advising)',
          value: 'Professional Services (Legal, Consulting, Advising)',
        },
        {
          label: 'Government',
          value: 'Government',
        },
        {
          label: 'Not-for-Profit',
          value: 'Not-for-Profit',
        },
        {
          label: 'Financial Services',
          value: 'Financial Services',
        },
        {
          label: 'Utilities',
          value: 'Utilities',
        },
        {
          label: 'Resources, Agriculture & Fisheries',
          value: 'Resources, Agriculture & Fisheries',
        },
        {
          label: 'Construction, Property & Real Estate',
          value: 'Construction, Property & Real Estate',
        },
        {
          label: 'Information, Media & Telecommunications',
          value: 'Information, Media & Telecommunications',
        },
        {
          label: 'Transport Services',
          value: 'Transport Services',
        },
        {
          label: 'Other',
          value: 'Other',
        },
      ],
      // defaultValue: 'Life Science / Healthcare',
      placeholder: $t('application.application.select'),
      showSearch: true,
      class: 'w-full',
    },
    rules: 'selectRequired',
  },
  {
    fieldName: 'website',
    label: $t('application.application.website'),
    component: 'Input',
    rules: 'required',
  },
  {
    fieldName: 'social',
    label: $t('application.application.social'),
    component: 'Input',
    rules: 'required',
  },
  {
    fieldName: 'socialType',
    label: $t('application.application.socialType'),
    component: 'Select',
    componentProps: {
      allowClear: true,
      filterOption: true,
      options: [
        {
          label: 'Slack',
          value: 'Slack',
        },
        {
          label: 'Twitter',
          value: 'Twitter',
        },
        {
          label: 'Facebook',
          value: 'Facebook',
        },
        {
          label: 'WeChat',
          value: 'WeChat',
        },
        {
          label: 'Other',
          value: 'Other',
        },
      ],
      // defaultValue: 'Slack',
      placeholder: $t('application.application.select'),
      showSearch: true,
      class: 'w-full',
    },
    rules: 'selectRequired',
  },
  {
    fieldName: 'role',
    label: $t('application.application.role'),
    component: 'Select',
    componentProps: {
      allowClear: true,
      filterOption: true,
      options: [
        {
          label: 'Dataset Owner',
          value: 'Dataset Owner',
        },
        {
          label: 'Data Preparer',
          value: 'Data Preparer',
        },
        {
          label: 'Storage provider filling out application on behalf of the data owner',
          value: 'Storage provider filling out application on behalf of the data owner',
        },
        {
          label: 'Data onramp entity that provides data onboarding services to multiple clients',
          value: 'Data onramp entity that provides data onboarding services to multiple clients',
        },
        {
          label: 'Other',
          value: 'Other',
        },
      ],
      // defaultValue: 'Dataset Owner',
      placeholder: $t('application.application.select'),
      showSearch: true,
      class: 'w-full',
    },
    rules: 'selectRequired',
  },
  {
    fieldName: 'totalAmount',
    label: $t('application.application.totalAmount'),
    component: 'InputNumber',
    rules: 'required',
    componentProps: {
      class: 'w-full',
      formatter: (value:any) => `${value / 1024}PiB`,
      parser: (value:any) => Number(value.replace('PiB', '')) * 1024,
    }
  },
  {
    fieldName: 'expectedSize',
    label: $t('application.application.expectedSize'),
    component: 'InputNumber',
    rules: 'required',
    suffix: () => h('span', { class: 'text-red-400' }, 'TiB'),
    componentProps: {
      class: 'w-full',
    }
  },
  {
    fieldName: 'replicas',
    label: $t('application.application.replicas'),
    component: 'Select',
    componentProps: {
      allowClear: true,
      filterOption: true,
      options: [
        {
          label: 4,
          value: 4,
        },
        {
          label: 5,
          value: 5,
        },
        {
          label: 6,
          value: 6,
        },
        {
          label: 7,
          value: 7,
        },
        {
          label: 8,
          value: 8,
        },
        {
          label: 9,
          value: 9,
        },
        {
          label: 10,
          value: 10,
        },
      ],
      // defaultValue: 4,
      placeholder: $t('application.application.select'),
      showSearch: true,
      class: 'w-full',
    },
    rules: 'selectRequired',
  },
  {
    fieldName: 'weeklyAllocation',
    label: $t('application.application.weeklyAllocation'),
    component: 'InputNumber',
    rules: 'required',
    suffix: () => h('span', { class: 'text-red-400' }, 'TiB'),
    componentProps: {
      class: 'w-full',
    }
  },
  {
    fieldName: 'address',
    label: $t('application.application.address'),
    component: 'Input',
    rules: 'required',
  },
  {
    fieldName: 'dataType',
    label: $t('application.application.dataType'),
    component: 'Select',
    componentProps: {
      allowClear: true,
      filterOption: true,
      options: [
        {
          label: 'Slingshot',
          value: 'Slingshot',
        },
        {
          label: 'Public, Open Dataset (Research/Non-Profit)',
          value: 'Public, Open Dataset (Research/Non-Profit)',
        },
        {
          label: 'Public, Open Commercial/Enterprise',
          value: 'Public, Open Commercial/Enterprise',
        },
        {
          label: 'Private Commercial/Enterprise',
          value: 'Private Commercial/Enterprise',
        },
        {
          label: 'Private Non-Profit / Social impact',
          value: 'Private Non-Profit / Social impact',
        },
      ],
      // defaultValue: 'Slingshot',
      placeholder: $t('application.application.select'),
      showSearch: true,
      class: 'w-full',
    },
    rules: 'selectRequired',
  },
  {
    fieldName: 'identifier',
    label: $t('application.application.identifier'),
    component: 'Input',
  },
  // {
  //   fieldName: 'progress',
  //   label: $t('application.application.progress'),
  //   component: 'InputNumber',
  // },
  // {
  //   fieldName: 'status',
  //   label: $t('application.application.status'),
  //   component: 'RadioButtonGroup',
  //   defaultValue: 1,
  //   componentProps: {
  //     options: [
  //       { label: $t('common.on'), value: 1 },
  //       { label: $t('common.off'), value: 2 },
  //     ],
  //   },
  // },
  ],
};

export const projectDetailFormSchemas: VbenFormProps = {
  schema: [
    {
      fieldName: 'id',
      label: 'ID',
      component: 'Input',
      dependencies: {
        show: false,
        triggerFields: ['id'],
      },
    },
    {
      fieldName: 'history',
      label: $t('project_detail.projectDetail.history'),
      component: 'Textarea',
      rules: 'required',
      componentProps: {
        class: 'w-full',
        rows: 6,
      }
    },
    {
      fieldName: 'associated',
      label: $t('project_detail.projectDetail.associated'),
      component: 'RadioButtonGroup',
      defaultValue: true,
      componentProps: {
        options: [
          { label: $t('common.on'), value: true },
          { label: $t('common.off'), value: false },
        ],
      },
      rules: 'selectRequired',
    },
    {
      fieldName: 'associatedAdd',
      label: $t('project_detail.projectDetail.associatedAdd'),
      component: 'Textarea',
      componentProps: {
        class: 'w-full',
        rows: 6,
      }
    },
    {
      fieldName: 'applicationId',
      label: $t('project_detail.projectDetail.applicationId'),
      component: 'InputNumber',
      disabled: true,
      dependencies: {
        show: false,
        triggerFields: ['applicationId'],
      },
    },
    // {
    //   fieldName: 'status',
    //   label: $t('project_detail.projectDetail.status'),
    //   component: 'RadioButtonGroup',
    //   defaultValue: 1,
    //   componentProps: {
    //     options: [
    //       { label: $t('common.on'), value: 1 },
    //       { label: $t('common.off'), value: 2 },
    //     ],
    //   },
    // },
  ],
};

export const useCaseDetailFormSchemas: VbenFormProps = {
  schema: [
    {
      fieldName: 'id',
      label: 'ID',
      component: 'Input',
      dependencies: {
        show: false,
        triggerFields: ['id'],
      },
    },
    {
      fieldName: 'describe',
      label: $t('use_case_detail.useCaseDetail.describe'),
      component: 'Textarea',
      rules: 'required',
      componentProps: {
        class: 'w-full',
        rows: 6,
      }
    },
    {
      fieldName: 'sourcedFrom',
      label: $t('use_case_detail.useCaseDetail.sourcedFrom'),
      component: 'Select',
      componentProps: {
        allowClear: true,
        filterOption: true,
        options: [
          {
            label: 'AWS Cloud',
            value: 'AWS Cloud',
          },
          {
            label: 'Google Cloud',
            value: 'Google Cloud',
          },
          {
            label: 'Azure Cloud',
            value: 'Azure Cloud',
          },
          {
            label: 'My Own Storage Infra',
            value: 'My Own Storage Infra',
          },
          {
            label: 'Other',
            value: 'Other',
          },
        ],
        // defaultValue: 'AWS Cloud',
        placeholder: $t('application.application.select'),
        showSearch: true,
        class: 'w-full',
      },
      rules: 'selectRequired',
    },
    {
      fieldName: 'sourcedFromAdd',
      label: $t('use_case_detail.useCaseDetail.sourcedFromAdd'),
      component: 'Textarea',
      componentProps: {
        class: 'w-full',
        rows: 6,
      }
    },
    {
      fieldName: 'region',
      label: $t('use_case_detail.useCaseDetail.region'),
      component: 'Select',
      componentProps: {
        allowClear: true,
        filterOption: true,
        options: [
          {
            label: 'None',
            value: 'None',
          },
          ...country_data
        ],
        // defaultValue: 'Afghanistan',
        placeholder: $t('application.application.select'),
        showSearch: true,
        class: 'w-full',
      },
      rules: 'selectRequired',
    },
    {
      fieldName: 'preparedDes',
      label: $t('use_case_detail.useCaseDetail.preparedDes'),
      component: 'Textarea',
      componentProps: {
        class: 'w-full',
        rows: 6,
      }
    },
    {
      fieldName: 'preparedNo',
      label: $t('use_case_detail.useCaseDetail.preparedNo'),
      component: 'Textarea',
      componentProps: {
        class: 'w-full',
        rows: 6,
      }
    },
    {
      fieldName: 'explain',
      label: $t('use_case_detail.useCaseDetail.explain'),
      component: 'Textarea',
      componentProps: {
        class: 'w-full',
        rows: 6,
      }
    },
    {
      fieldName: 'sample',
      label: $t('use_case_detail.useCaseDetail.sample'),
      component: 'Textarea',
      rules: 'required',
      componentProps: {
        class: 'w-full',
        rows: 6,
      }
    },
    {
      fieldName: 'confirm',
      label: $t('use_case_detail.useCaseDetail.confirm'),
      component: 'RadioButtonGroup',
      defaultValue: true,
      componentProps: {
        options: [
          { label: $t('common.on'), value: true },
          { label: $t('common.off'), value: false },
        ],
      },
    },
    {
      fieldName: 'confirmAdd',
      label: $t('use_case_detail.useCaseDetail.confirmAdd'),
      component: 'Textarea',
      componentProps: {
        class: 'w-full',
        rows: 6,
      }
    },
    {
      fieldName: 'retrievalFre',
      label: $t('use_case_detail.useCaseDetail.retrievalFre'),
      component: 'Select',
      componentProps: {
        allowClear: true,
        filterOption: true,
        options: [
          {
            label: 'Daily',
            value: 'Daily',
          },
          {
            label: 'Weekly',
            value: 'Weekly',
          },
          {
            label: 'Monthly',
            value: 'Monthly',
          },
          {
            label: 'Yearly',
            value: 'Yearly',
          },
          {
            label: 'Sporadic',
            value: 'Sporadic',
          },
          {
            label: 'Never',
            value: 'Never',
          },
        ],
        // defaultValue: 'Daily',
        placeholder: $t('application.application.select'),
        showSearch: true,
        class: 'w-full',
      },
      rules: 'selectRequired',
    },
    {
      fieldName: 'storedTime',
      label: $t('use_case_detail.useCaseDetail.storedTime'),
      component: 'Select',
      componentProps: {
        allowClear: true,
        filterOption: true,
        options: [
          {
            label: 'Less than 1 year',
            value: 'Less than 1 year',
          },
          {
            label: '1 to 1.5 years',
            value: '1 to 1.5 years',
          },
          {
            label: '1.5 to 2 years',
            value: '1.5 to 2 years',
          },
          {
            label: '2 to 3 years',
            value: '2 to 3 years',
          },
          {
            label: 'More than 3 years',
            value: 'More than 3 years',
          },
          {
            label: 'Permanently',
            value: 'Permanently',
          },
        ],
        // defaultValue: 'Less than 1 year',
        placeholder: $t('application.application.select'),
        showSearch: true,
        class: 'w-full',
      },
      rules: 'selectRequired',
    },
    {
      fieldName: 'applicationId',
      label: $t('use_case_detail.useCaseDetail.applicationId'),
      component: 'InputNumber',
      dependencies: {
        show: false,
        triggerFields: ['applicationId'],
      },
    },
  ],
};

export const allocationPlanFormSchemas: VbenFormProps = {
  schema: [
    {
      fieldName: 'id',
      label: 'ID',
      component: 'Input',
      dependencies: {
        show: false,
        triggerFields: ['id'],
      },
    },
  {
    fieldName: 'geography',
    label: $t('allocation_plan.allocationPlan.geography'),
    component: 'CheckboxGroup',
    componentProps: {
      name: 'cname',
      options: [
        {
          label: 'Greater China',
          value: 'Greater China',
        },
        {
          label: 'Asia other than Greater China',
          value: 'Asia other than Greater China',
        },
        {
          label: 'Africa',
          value: 'Africa',
        },
        {
          label: 'North America',
          value: 'North America',
        },
        {
          label: 'South America',
          value: 'South America',
        },
        {
          label: "Europe",
          value: "Europe",
        },
        {
          label: 'Australia (continent)',
          value: 'Australia (continent)',
        },
        {
          label: "Antarctica",
          value: "Antarctica",
        },
      ],
    },
    rules: 'selectRequired',
  },
  {
    fieldName: 'distributeMethod',
    label: $t('allocation_plan.allocationPlan.distributeMethod'),
    component: 'CheckboxGroup',
    componentProps: {
      name: 'cname',
      options: [
        {
          label: 'Cloud storage (i.e. S3)',
          value: 'Cloud storage (i.e. S3)',
        },
        {
          label: 'HTTP or FTP server',
          value: 'HTTP or FTP server',
        },
        {
          label: 'IPFS',
          value: 'IPFS',
        },
        {
          label: 'Shipping hard drives',
          value: 'Shipping hard drives',
        },
        {
          label: 'Lotus built-in data transfer',
          value: 'Lotus built-in data transfer',
        },
        {
          label: "Venus built-in data transfer",
          value: "Venus built-in data transfer",
        },
        {
          label: "I don't know yet",
          value: "I don't know yet",
        },
        {
          label: 'Others',
          value: 'Others',
        },
      ],
    },
    rules: 'selectRequired',
  },
  {
    fieldName: 'findMethod',
    label: $t('allocation_plan.allocationPlan.findMethod'),
    component: 'CheckboxGroup',
    componentProps: {
      name: 'cname',
      options: [
        {
          label: 'Slack',
          value: 'Slack',
        },
        {
          label: 'Filmine',
          value: 'Filmine',
        },
        {
          label: 'Big Data Exchange',
          value: 'Big Data Exchange',
        },
        {
          label: 'Partners',
          value: 'Partners',
        },
        {
          label: 'Others',
          value: 'Others',
        },
      ],
    },
    rules: 'selectRequired',
  },
  {
    fieldName: 'findMethodAdd',
    label: $t('allocation_plan.allocationPlan.findMethodAdd'),
    component: 'Textarea',
    componentProps: {
      class: 'w-full',
      rows: 6,
    }
  },
  {
    fieldName: 'dealsPlan',
    label: $t('allocation_plan.allocationPlan.dealsPlan'),
    component: 'CheckboxGroup',
    componentProps: {
      name: 'cname',
      options: [
        {
          label: 'Boost client',
          value: 'Boost client',
        },
        {
          label: 'Lotus client',
          value: 'Lotus client',
        },
        {
          label: 'Droplet client',
          value: 'Droplet client',
        },
        {
          label: 'Bidbot',
          value: 'Bidbot',
        },
        {
          label: 'Singularity',
          value: 'Singularity',
        },
        {
          label: "I don't know yet",
          value: "I don't know yet",
        },
        {
          label: 'Others/custom tool',
          value: 'Others/custom tool',
        },
      ],
    },
    rules: 'selectRequired',
  },
  {
    fieldName: 'dealsPlanAdd',
    label: $t('allocation_plan.allocationPlan.dealsPlanAdd'),
    component: 'Textarea',
    componentProps: {
      class: 'w-full',
      rows: 6,
    }
  },
  {
    fieldName: 'followed',
    label: $t('allocation_plan.allocationPlan.followed'),
    component: 'RadioButtonGroup',
    defaultValue: true,
    componentProps: {
      options: [
        { label: $t('common.on'), value: true },
        { label: $t('common.off'), value: false },
      ],
    },
    rules: 'required',
  },
  {
    fieldName: 'applicationId',
    label: $t('allocation_plan.allocationPlan.applicationId'),
    component: 'InputNumber',
    dependencies: {
      show: false,
      triggerFields: ['applicationId'],
    },
  },
  ],
};
