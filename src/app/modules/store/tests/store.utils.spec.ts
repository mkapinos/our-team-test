import { StoreDataItem, StoreDataItemType } from '../models/data';

export function getStoreDataItem(): StoreDataItem<any> {
  return {
    type: StoreDataItemType.Blocks,
    id: '1',
    attributes: {
      title: 'Our Team',
      memberCards: {
        first: {
          imageUrl: {
            w200: 'https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
            w400: 'https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
            w1080: 'https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
            w1920: 'https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
            w2560: 'https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2560&q=80'
          },
          block: {
            title: 'Serenity Wood',
            description: 'Digital Strategist',
            link: 'serenity@company.com',
            text: '+1 456 789 123'
          }
        },
        second: {
          imageUrl: {
            w200: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
            w400: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
            w1080: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
            w1920: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
            w2560: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80'
          },
          block: {
            title: 'Roy Moreno',
            description: 'Consultant',
            link: 'roy@company.com',
            text: '+1 234 567 891'
          }
        },
        third: {
          imageUrl: {
            w200: 'https://images.unsplash.com/photo-1520634222887-a2baa539fab3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
            w400: 'https://images.unsplash.com/photo-1520634222887-a2baa539fab3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
            w1080: 'https://images.unsplash.com/photo-1520634222887-a2baa539fab3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
            w1920: 'https://images.unsplash.com/photo-1520634222887-a2baa539fab3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
            w2560: 'https://images.unsplash.com/photo-1520634222887-a2baa539fab3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2560&q=80'
          },
          block: {
            title: 'Jessica Torres',
            description: 'Social Media Manager',
            link: 'jessica@company.com',
            text: '+1 345 678 912'
          }
        }
      }
    }
  };
}
