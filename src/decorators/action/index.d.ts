declare module '@rikishi/watermelondb/decorators/action' {
  const action: MethodDecorator

  export default action

  export const writer: MethodDecorator
  export const reader: MethodDecorator
}
