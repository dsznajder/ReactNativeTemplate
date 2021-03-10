import promptsModule from 'prompts';

export default function prompts(
  args: promptsModule.PromptObject | Array<promptsModule.PromptObject>,
  options?: promptsModule.Options,
) {
  return promptsModule(args, {
    onCancel: function () {
      process.exit(1);
    },
    ...options,
  });
}

export type PromptObject<
  T extends string = string
> = promptsModule.PromptObject<T>;
