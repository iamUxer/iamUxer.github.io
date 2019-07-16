## Inline Style 1
> 
```js
const styles = StyleSheet.create({
  container: {
    color: 'dodgerblue'
  },
  item1: {
    color: 'yellow'
  },
  item2: {
    color: 'white'
  },
});

export default function reactDesign() {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.case1} />
        <View style={styles.case2} />
      </View>
    );
  }
}
```

## Inline Style 2
> 
```js
const divStyle = {
  color: 'white',
  backgroundImage: 'url(' + imgUrl + ')'
};

ReactDOM.render(<div style={divStyle}>Hello World!</div>);
```

## Inline Style 3
```js
<div style={{ height: 10 }}>
  Hello World!
</div>
```
