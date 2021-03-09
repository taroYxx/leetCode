# 小tip

            

### @property (copy) NSMutableArray *array;
1 不可变崩溃
2 在默认情况下，由编译器所合成的方法会通过锁定机制确保其原子性(atomicity)。如果属性具备 nonatomic 特质，则不使用互斥锁（atomic 的底层实现，老版本是自旋锁，iOS10开始是互斥锁--spinlock底层实现改变了。）。请注意，尽管没有名为“atomic”的特质(如果某属性不具备 nonatomic 特质，那它就是“原子的”(atomic))。

### 为什么block要使用copy属性
为了能够将栈block移到堆block上面，栈block会随着函数的运行结束而释放

### 面向对象的三要素
封装：把具体的对象抽象化，把相同类型的对象抽象成一个类
继承：子类拥有父类的全部属性和方法
多态：一个事物的多样性，一个事物，同一个方法表现出不同的状态

### 多态
一句话概括多态：子类重写父类的方法，父类指针指向子类。
多态的三个条件：
1 继承：各种cell继承自BaseCell
2 重写：子类cell重写BaseCell的set方法
3 父类cel指针指向子类cell

### 通知的发送和接收是否在同一线程
是的  Notification在哪个线程中post，就在哪个线程中被转发，而不一定是在注册观察者的那个线程中。 接受通知刷新UI需要切换到主线程中去刷新

怎么重定向到指定的线程中去呢？  ios4之后提供了带有block的通知，在queue里面指定线程

### NSURLSession 和 NSURLConnection区别
1 请求方法的控制
NSURLConnection实例化对象，实例化开始，默认请求就发送(同步发送),不需要调用start方法。而cancel可以停止请求的发送，停止后不能继续访问，需要创建新的请求。
NSURLSession有三个控制方法，取消(cancel)、暂停(suspend)、继续(resume)，暂停以后可以通过继续恢复当前的请求任务。
2 断点传输控制会更加方便
3 具有三种可配置信息，硬盘， 缓存， 后台

### copy和strong修饰NSArray
1 strong: setter时候调了[sAry retain]方法，实现了指针拷贝，也就是浅拷贝
2 copy: setter时候调用了[cAry copy]方法，实现了内容拷贝，也就是深拷贝
3 copy的功能是基于setter方法， _ary = ary 是不会实现copy方法的
4 iOS 中并不是所有的对象都支持copy，mutableCopy，遵守 NSCopying 协议的类可以发送 copy 消息，遵守NSMutableCopying 协议的类才可以发送 mutableCopy 消息
假如发送了一个没有遵守上诉两协议而发送 copy 或者 mutableCopy, 那么就会发生异常。但是默认的 iOS 类并没有遵守这两个协议。如果想自定义一下 copy 那么就必须遵守 NSCopying, 并且实现 copyWithZone: 方法，如果想自定义一下mutableCopy 那么就必须遵守 NSMutableCopying, 并且实现 mutableCopyWithZone: 方法。

### @property、@synthesize和@dynamic

@synthesize表示如果属性没有手动实现setter和getter方法，编译器会自动加上这两个方法。
@dynamic 告诉编译器：属性的 setter 与 getter 方法由用户自己实现，不自动生成。

### objc中向一个nil对象发送消息将会发生什么？
如果向一个nil对象发送消息，首先在寻找对象的isa指针时就是0地址返回了，所以不会出现任何错误。

### runtime如何实现weak变量的自动置nil？
runtime 对注册的类， 会进行布局，对于 weak 对象会放入一个 hash 表中。 用 weak 指向的对象内存地址作为 key，当此对象的引用计数为0的时候会 dealloc，假如 weak 指向的对象内存地址是a，那么就会以a为键， 在这个 weak 表中搜索，找到所有以a为键的 weak 对象，从而设置为 nil。

###  runloop的mode作用是什么
model 主要是用来指定事件在运行循环中的优先级的，分为：
NSDefaultRunLoopMode（kCFRunLoopDefaultMode）：默认，空闲状态
UITrackingRunLoopMode：ScrollView滑动时
UIInitializationRunLoopMode：启动时
NSRunLoopCommonModes（kCFRunLoopCommonModes）：Mode集合

### 不手动指定autoreleasepool的前提下，一个autorealese对象在什么时刻释放？（比如在一个vc的viewDidLoad中创建


手动干预释放时机--指定 autoreleasepool 就是所谓的：当前作用域大括号结束时释放。
系统自动去释放--不手动指定 autoreleasepool Autorelease对象出了作用域之后，会被添加到最近一次创建的自动释放池中，并会在当前的 runloop 迭代结束时释放。


### 在 block 内为什么不能修改 block 外部变量
Block不允许修改外部变量的值。Apple这样设计，应该是考虑到了block的特殊性，block 本质上是一个对象，block 的花括号区域是对象内部的一个函数，变量进入 花括号，实际就是已经进入了另一个函数区域---改变了作用域。在几个作用域之间进行切换时，如果不加上这样的限制，变量的可维护性将大大降低。又比如我想在block内声明了一个与外部同名的变量，此时是允许呢还是不允许呢？只有加上了这样的限制，这样的情景才能实现

### autolayout


stackView 可以用框起来构成一个stackView
优点：容易维护

setNeedLayout -> Deferred Layout Pass -> layoutSubView会得到布局引擎计算出来的frame进行布局

layoutSubviews

- 1 设置frame的时候， frame被修改的时候， 滑动scrollview的时候， 旋转

- 2 layoutifNeeded
setNeedsLayout方法并不会立即刷新，立即刷新需要调用layoutIfNeeded方法！

- 3 setNeedsLayout
layoutSubviews 方法只能被系统触发调用，程序员不能手动直接调用该方法。要引起该方法的调用，可以调用 UIView 的setNeedsLayout方法来标记一个 UIView。这样一来，在 UI 线程的下次绘制循环中，系统便会调用该 UIView 的 layoutSubviews 方法。

masonry 
1 使用优先级设置约束
2 make.left.greaterThanOrEqualTo(label.mas_left).with.priorityLow();
https://blog.csdn.net/weixin_30871701/article/details/95787400

### 编译的流程
首先，你写好代码后，LLVM 会预处理你的代码，比如把宏嵌入到对应的位置。

预处理完后，LLVM 会对代码进行词法分析和语法分析，生成 AST 。AST 是抽象语法树，结构上比代码更精简，遍历起来更快，所以使用 AST 能够更快速地进行静态检查，同时还能更快地生成 IR（中间表示）。

最后 AST 会生成 IR，IR 是一种更接近机器码的语言，区别在于和平台无关，通过 IR 可以生成多份适合不同平台的机器码。对于 iOS 系统，IR 生成的可执行文件就是 Mach-O。

### 连接器
链接器在链接多个目标文件的过程中，会创建一个符号表，用于记录所有已定义的和所有未定义的符号。链接时如果出现相同符号的情况，就会出现“ld: dumplicate symbols”的错误信息；如果在其他目标文件里没有找到符号，就会提示“Undefined symbols”的错误信息。

### 动态库和静态库的区别
链接的共用库分为静态库和动态库：静态库是编译时链接的库，需要链接进你的 Mach-O 文件里，如果需要更新就要重新编译一次，无法动态加载和更新；而动态库是运行时链接的库，使用 dyld 就可以实现动态加载。

Mach-O 文件是编译后的产物，而动态库在运行时才会被链接，并没参与 Mach-O 文件的编译和链接，所以 Mach-O 文件中并没有包含动态库里的符号定义。也就是说，这些符号会显示为“未定义”，但它们的名字和对应的库的路径会被记录下来。运行时通过 dlopen 和 dlsym 导入动态库时，先根据记录的库路径找到对应的库，再通过记录的名字符号找到绑定的地址。





