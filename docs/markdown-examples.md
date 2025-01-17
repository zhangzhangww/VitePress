# Markdown 扩展示例

本页演示了 VitePress 提供的一些内置 markdown 扩展。

## 语法高亮显示

VitePress 提供了由 [Shiki](https://github.com/shikijs/shiki), 提供支持的语法高亮，以及行高亮等附加功能：

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

**Input**

```md
::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险的警告。
:::

::: details
This is a details block.
:::
```

**Output**

::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险的警告。
:::

::: details
This is a details block.
:::

## More

查看文档以获取 [Markdown 扩展的完整列表。](https://vitepress.dev/guide/markdown).
