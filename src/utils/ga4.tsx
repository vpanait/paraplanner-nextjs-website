export const GA4 = "G-XP0J11QLHT";

export const sendGAEvent = (
  type: 'event' | 'page_view', // Specify the allowed event types
  eventName: string, // The name of the event
  payload?: { [key: string]: any }
) => {
  (window as any).gtag(type, eventName, payload)
}