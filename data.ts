import { VocabularyItem, Unit } from './types';

// Raw text from File 1
const rawFile1 = `
Unit 1make friends 交朋友
get to know 认识；了解
full /fʊl/ adj. 完整的；满的
full name 全名
grade /ɡreɪd/ n. 年级；等级
last name 姓氏
classmate /'klɑːsmeɪt/ n. 同班同学
class teacher 班主任
first name 名字
mistake /mɪ'steɪk/ n. 错误；失误
country /'kʌntri/ n. 国家
same /seɪm/ adj. 相同的
twin /twɪn/ n. 双胞胎之一 adj. 双胞胎之一的
both /bəʊθ/ adj. & pron. 两个；两个都
band /bænd/ n. 乐队
pot /pɒt/ n. 锅
a lot 很；非常
tofu /'təʊfuː/ n. 豆腐
parrot /'pærət/ n. 鹦鹉
guitar /ɡɪ'tɑː(r)/ n. 吉他
tennis /'tenɪs/ n. 网球
page /peɪdʒ/ n.页面；（书刊或纸张）页
even /'iːvn/ adv. 甚至；连；愈加
hey /heɪ/ int. 嘿；喂
play the guitar 弹吉他
would /wʊd/ modal v. 想(用于礼貌地邀请或向某人提供某物)；将会
would(’d) like to 表示愿意；喜欢
information [ˌɪnfə'meɪʃn/ n. 信息；消息
hobby /'hɒbi/ n. 业余爱好
re /ri:/ prp.（用于回复电子邮件）关于；事由
Green /ɡriːn/ 格林
UK [ˌjuː'keɪ/ 英国
US [ˌjuː'es/ 美国
Smith /smɪθ/ 史密斯
Lisa [ˈliːsə/ 莉萨
Tom /tɒm/ 汤姆
hot pot 火锅
Sally /'sæli/ 萨莉
Wood /wʊd/ 伍德
Sydney /'sɪdni/ 悉尼(澳大利亚城市)
Australia /ɒ'streɪlɪə/ 澳大利亚
Mapo tofu 麻婆豆腐
Beijing roast duck 北京烤鸭
Singapore [ˌsiŋgə'pɔ:/ 新加坡
the Great Wall 长城
Pauline [ˈpɔːliːn/ 保利娜
Lee /liː/ 李
Coco /'kəʊkəʊ/ 科科
London /'lʌndən/ 伦敦(英国首都)
Unit 2mean /miːn/ v. 意思是；打算
husband /'hʌzbənd/ n. 丈夫
bat /bæt/ n. 球棒；球拍
ping-pong bat 乒乓球拍
play ping-pong 打乒乓球
together /tə'ɡeðə(r)/ adv. 在一起；共同
every day 每天
fishing rod 钓竿
spend /spend/ v. 花(时间、钱等)
a lot of / lots of 大量；许多
really /'riːəli/ adv. 非常；确实；真正地
member /ˈmembə(r)/ n.成员；会员
activity /æk'tɪvɪtɪ/ n. 活动
chess /tʃes/ n. 国际象棋
Chinese chess 中国象棋
grandparent /ˈɡrænpeərənt/ n. 祖父（母）；外祖父（母）
funny /'fʌni/ adj. 好笑的；奇怪的
laugh /lɑːf/ v. 笑；发笑 n. 笑声
different /'dɪfrənt/ adj. 不同的
violin [ˌvaɪə'lɪn/ n. 小提琴
have fun 玩得高兴
hat /hæt/ n.帽子
handsome /'hænsəm/ adj. 英俊的
knee /niː/ n. 膝；膝盖
at night 在夜晚
in the middle 中间；中部
grandchild /'ɡræntʃaɪld/ n. (pl. grandchildren) (外)孙子；(外)孙女
son /sʌn/ n. 儿子
hike /haɪk/ v. & n. 远足；徒步旅行
go hiking 远足；徒步旅行
next to 紧邻；在……近旁
David /'deɪvɪd/ 戴维
Jim /dʒɪm/ 吉姆
Kate /keit/ 凯特
Lily /'lɪli/ 莉莉
Ireland /'aɪələnd/ 爱尔兰
Fred /fred/ 弗雷德
Sam [ˈsæm/ 萨姆
Jane /dʒein/ 简
Jack /dʒæk/ 杰克
Sarah [ˈseərə/ 萨拉
Oscar /'ɒskə(r)/ 奥斯卡
Lucy [ˈluːsi/ 露西
Unit 3
hall /hɔːl/ n. 礼堂；大厅
dining /ˈdaɪnɪŋ/ hall 餐厅
in front of 在……前面
building /'bɪldɪŋ/ n. 建筑物；房子
across /ə'krɒs/ prep. & adv. 过；穿过
across from 在对面
centre /ˈsentə(r)/ （=center) n.中心；中央
gym /dʒɪm/ n. (=gymnasium) 体育馆；健身房；(尤指学校的)体育活动
field /fiːld/ n. 场地；田地
sports field 运动场
office /'ɒfɪs/ n. 办公室
large /lɑːdʒ/ adj. 大的；大号的
special /'speʃl/ adj. 特别的；特殊的
smart /smɑːt/ adj. 智能的；聪明的
whiteboard /'waɪtbɔːd/ n. 白板；白色书写板
put up 张贴；搭建
important /ɪm'pɔːtnt/ adj. 重要的
notice /'nəʊtɪs/ n. 通知；注意 v. 注意到；意识到
locker /'lɒkə(r)/ n. 有锁存物柜；寄物柜
drawer /drɔː(r)/ n. 抽屉
at the back (of) 在(……)后面
corner /'kɔːnə(r)/ n. 角；墙角；街角
bookcase /'bʊkkeɪs/ n. 书架；书柜
screen /skriːn/ n. 屏幕；银幕
at school 在学校
different from 与...不一样
modern /'mɒdn/ adj. 现代的；当代的
do exercises 做体操
amazing /ə'meɪzɪŋ/ adj. 令人惊奇(惊喜或惊叹)的
raise /reɪz/ v. 使升高；提高
flag /flæɡ/ n. 旗；旗帜
most /məʊst/ adj. & pron. 大多数；最多；最大 adv. 最
change /tʃeɪndʒ/ v. & n. 改变；变化
seat /siːt/ n. 座位
delicious /dɪ'lɪʃəs/ adj. 美味的；可口的
How about ……怎么样；如何
yours /jɔːz/ pron. (通常写作Yours，用于书信结尾的签名前) 你的；您的
send /send/ v.发送；邮寄
similar /'sɪmələ(r)/ adj. 类似的；相像的
similar to 类似的；相像的
sound /saʊnd/ v. 听起来；好像 n. 声音；响声
bye for now 再见
Flora /'flɔːrə/ 弗洛拉
Unit 4biology /baɪ'ɒlədʒi/n. 生物学
IT abbr. (=information technology) 信息技术
geography /dʒi'ɒɡrəfi/n. 地理(学)
history /'hɪstri/n. 历史；历史课
boring /'bɔːrɪŋ/adj. 乏味的；令人生厌的
useful /'juːsfl/adj. 有用的；有益的
exciting /ɪk'saɪtɪŋ/adj. 令人激动的；使人兴奋的
past /pɑːst/n. 过去；过去的事情 adj. 过去的 prep. 在……之后
good with 灵巧的；善于应付……的
number /'nʌmbə(r)/n. 数字；号码
help sb with 帮助某人做(某事)
reason /'riːzn/n. 原因；理由
listen to 听；倾听
good at 擅长
remember /rɪ'membə(r)/v. 记住；记起
as /æz,əz/prep. 如同；座位 conj. 当……时；由于
AM /ˌeɪ ˈem/(=a.m.) 上午
PM /ˌpiː ˈem/ (=p.m.) 下午
French /frentʃ/n. 法语 adj. 法国的；法国人的
excellent /'eksələnt/adj. 优秀的；极好的
instrument /'ɪnstrəmənt/n. 器械；工具
singer /'sɪŋə(r)/n. 歌手
future /'fjuːtʃə(r)/n. 将来；未来
in the future 将来；未来
term /tɜːm/n. 学期
work out 计算出；解决
problem /'prɒbləm/n. 难题；困难
in class 课堂上
magic /'mædʒɪk/n. 魔法；魔力；魔术 adj. 有魔力的；有神奇力量的
life /laɪf/n. 生活；生命
scientist /'saɪəntɪst/n. 科学家
Baker /'beɪkə(r)/贝克
Mike /maɪk/迈克
Davis /'deivis/戴维斯
Canada /'kænədə/加拿大
Unit 5club /klʌb/n. 俱乐部；社团
join /dʒɔɪn/v. 参加；加入
choose /tʃuːz/v. 选择；挑选
drama /'drɑːmə/n. 戏剧；戏剧表演
play Chinese chess 下中国象棋
feeling /'fiːlɪŋ/n. 感觉；情感
news /njuːz/n. 消息；新闻
musical /'mjuːzɪkl/adj. 音乐的；有音乐天赋的
musical instrument/'mjuːzɪkl ˈɪnstrəmənt/乐器
exactly /ɪɡ'zæktli/adv. 正是如此；准确地
drum /drʌm/n. 鼓
ability /ə'bɪləti/n. 能力；才能
paint /peɪnt/v. 用颜料画；在……上刷油漆 n. 油漆；涂料
climb /klaɪm/v. 攀登；爬
more /mɔː(r)/adj. & pron. 更多(的)
act /ækt/v. 扮演；行动 n. (戏剧等)一幕；行动
act out 表演
at home 在家里
interested /'ɪntrəstɪd/adj. 感兴趣的
interested in 对……感兴趣
nature /'neɪtʃə(r)/n. 自然界；大自然
beef /biːf/n. 牛肉
soon /suːn/adv. 不久；很快
than /ðən/prep. & conj. (用以引出比较的第二部分) 比
more than 多于
mind /maɪnd/n. 头脑；心思
fall /fɔːl/v. & n. 进入；掉落；跌倒 n. (美式)秋天
fall in love with 爱上……
take photos / take a photo 拍照
collect /kə'lekt/v. 收集；采集
insect /'ɪnsekt/n. 昆虫
discover /dɪ'skʌvə(r)/v. 发现；发觉
wildlife /'waɪldlaɪf/n. 野生动物；野生生物
Linda /'lɪndə/琳达
Alice /ˈælɪs/爱丽丝
Bill /bɪl/比尔
Jenny /'dʒeni/珍妮
Unit 6make use of 使用……；利用……
quarter/ˈkwɔːtə(r)/ n. 一刻钟；四等份之一
shower /'ʃaʊə(r)/n. 淋浴；淋浴器 v. 洗淋浴
take a shower 淋浴
get dressed 穿衣服
brush /brʌʃ/v. (用刷子)刷；n. 刷子；画笔
tooth /tuːθ/n. (pl. teeth) 牙齿
duty /'djuːti/n. 值班；职责
on duty 值班
usually /'juːʒuəli/adv. 通常地；一般地
get up 起床；站起
reporter /rɪ'pɔːtə(r)/n. 记者
around /ə'raʊnd/prep. & adv. 大约；环绕；到处
homework /'həʊmwɜːk/n. 家庭作业
go to bed 上床睡觉
saying /'seɪɪŋ/n. 谚语；格言
rise /raɪz/v. 起床；升起；增长 n. 增加；增强
stay /steɪ/v. 停留；待
routine /ruː'tiːn/n. 常规
restaurant /'restrɒnt/n. 餐馆；餐厅
housework /'haʊswɜːk/n. 家务劳动
while /waɪl/n. 一段时间；一会儿 conj. 在……期间；当……的时候
weekend /ˌwiːk'end/n. 周末
at weekends 在周末
daily /'deɪli/adj. 每日的；日常的
daily routine 日常生活
only /'əʊnli/adv. 只；仅
break /breɪk/n. 休息；间断 v. (使)破碎；损坏
Finnish /'fɪnɪʃ/n. 芬兰语 adj. 芬兰的；芬兰人的；芬兰语的
finish /'fɪnɪʃ/v. 结束；完成
hockey /'hɒki/n. 曲棍球
ice hockey /aɪs 'hɒki/冰球运动；冰上曲棍球
already /ɔːl'redi/adv. 已经；早已
dark /dɑːk/adj. 昏暗的；深色的
outside /ˌaʊt'saɪd/adv. 在外面 adj. 外面的 prep. 在……外面
part/pɑːt/ n. 部分
everyday/ˈevrideɪ/  adj. 每天的；日常的
prepare /prɪ'peə(r)/v. 把……准备好；准备
prepare sth for为......把某事物准备好
Timo /tiːməʊ/蒂莫
Halla /haˈlaː/哈拉
Helsinki /hɛlˈsɪŋki/赫尔辛基(芬兰首都)
Finland /'fɪnlənd/芬兰
home economics /ˌhəʊm ˌiːkəˈnɒmɪks/家政学；家庭经济学
Unit 7celebrate /'selɪbreɪt/v. 庆祝；庆贺
surprise /sə'praɪz/n. 惊奇；惊讶 v. 使感到意外
something /'sʌmθɪŋ/pron. 某事；某物
sale /seɪl/n. 出售；销售
kilo /'kiːləʊ/(=kilogram,kilogramme/ˈkɪləʊgræm/) n. (pl. kilos) 千克；公斤
yogurt /'jɒɡət/n. (=yoghurt) 酸奶
total /'təʊtl/n. 总数；合计 adj. 总的；全体的
price /praɪs/n. 价格
balloon /bə'luːn/n. 气球
chocolate /'tʃɒklət/n. 巧克力
pizza /'piːtsə/n. 比萨饼
list /lɪst/v. 列表；列清单 n. 名单；清单
own /əʊn/adj. & pron. 自己的；本人的
example /ɪɡ'zɑːmpl/n. 例子；范例
for example 例如
language /'læŋɡwɪdʒ/n. 语言
international /ˌɪntə'næʃnəl/adj. 国际的
mark /mɑːk/v. 做记号；纪念；打分 n. 记号
national /'næʃnəl/adj. 国家的；民族的
found /faʊnd/v. 创建；创立
meaningful /'miːnɪŋfl/adj. 重要的；重大的
make a wish 许愿
celebration/ˌselɪˈbreɪʃn/ n. 庆典； 庆祝（活动）
post/pəʊst/n. 帖子；邮政  v. 邮寄；发布
contact/ˈkɒntækt/  n. 联系； 接触  v. 联系；联络
symbol/ˈsɪmbl/ n. 象征； 符合
take a photo 拍照
village /'vɪlɪdʒ/n. 村庄；村镇
grow /ɡrəʊ/v. 成长；长大；增长
blow /bləʊ/v. 吹；刮
blow out 吹灭
enjoy /ɪn'dʒɔɪ/v. 享受……的乐趣；喜欢
height /haɪt/n. 身高；高度
later /'leɪtə(r)/adv. & adj. 以后(的)；后来(的)
next time 下次
whom /huːm/pron. 谁；什么人
William/ˈwɪljəm/ Shakespeare/ˈʃeɪkspɪər/ 威廉·莎士比亚
Florence/ˈflɒrəns/ Nightingale/ˈnaɪtɪŋɡeɪl/ 弗洛伦斯·南丁格尔
National Day /'næʃənəl deɪ/国庆节
CPC Founding Day 中国共产党建党纪念日
PLA Day 中国人民解放军建军节
Judy /ˈdʒuːdi/朱迪
Clark /klɑːk/克拉克
`;

// Raw text from File 2
const rawFile2 = `
Starter Unit 1 Hello! 小学
hello /həˈləʊ/ interj. 你好；喂
how /haʊ/ adv. 怎样；如何
do /duː; də/ aux v. & v. （第三人称单数形式does /dʌz/）用于构成否定句和疑问句；做；干
you /juː; ju/ pron. 你；您；你们
people /ˈpiːpl/ n. 人；人们
hi /haɪ/ interj. 嗨；喂
good /ɡʊd/ adj. 好的
morning /ˈmɔːnɪŋ/ n. 早晨；上午
and /ænd; ənd/ conj. 和；又
Ms /mɪz; məz/（用于女子的姓氏或姓名前，不指明婚否）女士
class /klɑːs/ n. 班级；课
sit /sɪt/v. 坐
down /daʊn/ adv. 下；向下
please /pliːz/ interj. （用于客气地请求或吩咐）请
can /kæn; kən/ modal v. 能；会
say /seɪ/v. 说
to /tuː; tə/ 常用于原形动词之前，表示该动词为不定式 prep. 朝；至
the /ðiː; ðə, ði/ art. 指已提到或易领会到的人或事物
I /aɪ/ pron. 我
am /æm; əm/v. 是
thank /θæŋk/v. 感谢；谢谢
now /naʊ/ adv. 现在；目前
my /maɪ/ pron. 我的
name /neɪm/ n. 名字；名称
is /ɪz/v. 是
nice /naɪs/ adj. 令人愉快的；宜人的
meet /miːt/v. 遇见；相逢
so /səʊ/ conj. 用来引出评论或问题；所以adv. 这么；那么
what /wɒt/ pron. & adj. 什么
your /jɔː(r); jə(r)/ pron. 你的；您的；你们的
too /tuː/ adv. 也；又；太
a /eɪ; ə/ (an /æn; ən/) art.（用于单数可数名词前，表示未曾提到的）一（人、事、物）
are /ɑː(r); ə(r)/v. 是
goodbye /ˌɡʊdˈbaɪ/ interj. & n. 再见；再会
may /meɪ/ modal v. 可以；可能
have /hæv; həv/v.（第三人称单数形式has /hæz; həz/）有
call /kɔːl/v. 把……叫作；（给……）打电话；呼唤  n. 打电话；大声呼叫
me /miː; mi/ pron.（I的宾格）我
fine /faɪn/ adj. 健康的；美好的
great /ɡreɪt/ adj. 美妙的；伟大的
that /ðæt/ pron. 那；那个
let /let/v. 允许；让
us /ʌs; əs/ pron.（we的宾格）我们
go /ɡəʊ/v. 去；走
bye /baɪ/ (= goodbye) interj. 再见
it /ɪt/ pron. 它
time /taɪm/ n. 时间；次
for /fɔː(r); fə(r)/ prep. 为了；给；对
Starter Unit 2 Keep tidy! 小学
hello /həˈləʊ/ interj. 你好；喂
keep /kiːp/v.（使）保持；保留
tidy /ˈtaɪdi/ adj. 整洁的；井井有条的
in /ɪn/ prep. 在……里；表示某事完成或发生的方式
schoolbag /ˈskuːlbæɡ/ n. 书包
cap /kæp/ n.（无帽边或有帽舌的）帽子；棒球帽
ruler /ˈruːlə(r)/ n. 尺；直尺
pencil /ˈpensl/ n. 铅笔
p.7
brown /braʊn/ adj. & n. 棕色（的）；褐色（的）
black /blæk/ adj. & n. 黑色（的）
yellow /ˈjeləʊ/ adj. & n. 黄色（的）
orange /ˈɒrɪndʒ/ adj. & n. 橙红色（的）；橘黄色（的）n. 橙子；柑橘
green /ɡriːn/ adj. & n. 绿色（的）
blue /bluː/ adj. & n. 蓝色（的）
white /waɪt/ adj. & n. 白色（的）
red /red/ adj. & n. 红色（的）
colour /ˈkʌlə(r)/ (= color) n. 颜色
trousers /ˈtraʊzəz/ n. (pl.) 裤子
they /ðeɪ/ pron. 他（她、它）们
bicycle /ˈbaɪsɪkl/ (= bike /baɪk/) n. 自行车；脚踏车
shoe /ʃuː/ n. 鞋
where /weə(r)/ adv. 在哪里；到哪里
put /pʊt/v. 放
bed /bed/ n. 床
desk /desk/ n. 书桌
chair /tʃeə(r)/ n. 椅子
book /bʊk/ n. 书
box /bɒks/ n. 箱；盒；方框
sock /sɔk/ n. 短袜
some /sʌm; səm/ adj. 一些；某些 pron. 有些；有的
pair /peə(r)/ n. 一双；一对
of /ɒv; əv/ prep. 属于（某人）；关于（某人）
on /ɒn/ prep. 在……上
under /ˈʌndə(r)/ prep. 在……下
mum /mʌm/ (= mom /mɒm/) n. 妈妈
not /nɒt/ adv. 不；没有
find /faɪnd/ v. 找到；发现
new /njuː/ adj. 新的；刚出现的
no /nəʊ/ interj. 不；不要 adj. 没有；不是
here /hɪə(r)/ adv. 在这里
room /ruːm/ n. 房间
OK /əʊˈkeɪ/ interj. 好；行  adj. & adv. 可以（的）
sorry /ˈsɒri/ adj. 抱歉的；惋惜的
dad /dæd/ n. 爸爸
glasses /ˈɡlɑːsɪz/ n. (pl.) 眼镜
see /siː/v. 看见
them /ðem; ðəm/ pron.（they的宾格）他（她、它）们
wait /weɪt/v. 等待；等候
minute /ˈmɪnɪt/ n. 分；分钟
head /hed/ n. 头
welcome /ˈwelkəm/ adj. 受欢迎的interj., v. & n. 欢迎
her /hɜː(r); hə(r)/ pron. 她的
nose /nəʊz/ n. 鼻子
Starter Unit 3 Welcome! 小学
cat /kæt/ n. 猫
these /ðiːz/ pron. 这些
plant /plɑːnt/ n. 植物 v. 种植
baby /ˈbeɪbi/ n. 动物幼崽；婴儿
chicken /ˈtʃɪkɪn/ n. 鸡；鸡肉
dog /dɒɡ/ n. 狗
rabbit /ˈræbɪt/ n. 兔子
tomato /təˈmɑːtəʊ; təˈmeɪtəʊ/ n. (pl. tomatoes) 西红柿
flower /ˈflaʊə(r)/ n. 花
apple /ˈæpl/ n. 苹果
tree /triː/ n. 树
this /ðɪs/ pron. 这；这个
those /ðəʊz/ pron. 那些
animal /ˈænɪml/ n. 动物
duck /dʌk/ n. 鸭子
potato /pəˈteɪtəʊ/ n. (pl. potatoes)土豆
many /ˈmeni/ adj. & pron. 许多
grandpa /ˈɡrænpɑː/ (= grandfather/ˈɡrænfɑːðə(r)/ ) n. 爷爷；外公
farm /fɑːm/ n. 农场
cow /kaʊ/ n. 奶牛
small /smɔːl/ adj. 小的
lake /leɪk/ n. 湖
house /haʊs/ n. 房子
horse /hɔːs/ n. 马
sheep /ʃiːp/ n. (pl. sheep) 羊；绵羊
big /bɪɡ/ adj. 大的
look /lʊk/v. 看
uncle /ˈʌŋkl/ n. 舅父；叔父；伯父；姑父；姨父
grass /ɡrɑːs/ n. 草
kind /kaɪnd/ n. 种类 adj. 体贴的；亲切的
he /hiː; hi/ pron. 他
pig /pɪɡ/ n. 猪
there /ðeə(r)/ adv. 在那里
behind /bɪˈhaɪnd/ prep. 在……的后面
home /həʊm/ n. 家
beautiful /ˈbjuːtɪfl/ adj. 美丽的
like /laɪk/v. 喜欢 prep. 例如；像……一样
his /hɪz; ɪz/ pron. 他的
at /æt; ət/ prep. 向；朝；在（某处、某时间或时刻）
Unit 1 You and me 小学 
we /wiː; wi/ pron. 我们
make /meɪk/v. 使成为；制造
friend /frend/ n. 朋友
get /ɡet/v. 去取（或带来）；得到
know /nəʊ/v. 知道
from /frɒm; frəm/ prep. 从……来；从……开始
old /əʊld/ adj. 老的；旧的
last /lɑːst/ adj. 最后的；末尾的
year /jɪə(r); jɜː(r)/ n. 年 
yes /jes/ interj. 是的；可以
Mr /ˈmɪstə(r)/（用于男子的姓氏或姓名前）先生 
our /ɑː(r); ˈaʊə(r)/ pron. 我们的
English /ˈɪŋɡlɪʃ/ n. 英语；英格兰人 adj. 英语的；英格兰的
teacher /ˈtiːtʃə(r)/ n. 教师
which /wɪtʃ/ pron. 哪一个；哪一些 
who /huː/ pron. 谁；什么人
job /dʒɒb/ n. 工作
student /ˈstjuːdnt/ n. 学生
age /eɪdʒ/ n. 年龄 
she /ʃiː; ʃi/ pron. 她 
favourite /ˈfeɪvərɪt/ (= favorite) adj. 最喜欢的；最爱的
pet /pet/ n. 宠物
very /ˈveri/ adv. 很；非常
cute /kjuːt/ adj. 可爱的
much /mʌtʃ/ adv. 非常；十分 pron. & adj. 许多；大量；多少
school /skuːl/ n. 学校
China /ˈtʃaɪnə/ 中国
panda /ˈpændə/ n. 熊猫
hot /hɒt/ adj. 热的；炎热的 
also /ˈɔːlsəʊ/ adv. 也；而且
live /lɪv/v. 居住；生活
with /wɪð; wɪθ/ prep. 和……在一起；带有；使用
parent /ˈpeərənt/ n. 父（母）亲
Chinese /ˌtʃaɪˈniːz/ adj. 中国的 n. 中国人；汉语
food /fuːd/ n. 食物
lot /lɒt/ pron. 大量；许多 
about /əˈbaʊt/ prep. 关于 adv. 大约
wall /wɔːl/ n. 墙
all /ɔːl/ pron. & adj. 所有（的）；全部（的）
hour /ˈaʊə(r)/ n. 小时
ago /əˈɡəʊ/ adv. 以前
family /ˈfæməli/ n. 家庭
bird /bɜːd/ n. 鸟
speak /spiːk/v. 说（某种语言）；说话
sport /spɔːt/ n. 运动
often /ˈɒfn; ˈɒftən/ adv. 时常；常常
play /pleɪ/v. 玩 
after /ˈɑːftə(r)/ prep. & conj. 在……以后
want /wɒnt/v. 想要
be /biː; bi/v. 是
place /pleɪs/ n. 地方；地点
music /ˈmjuːzɪk/ n. 音乐
love /lʌv/v. & n. 喜爱；爱
write /raɪt/v. 写
Unit 2 We're family！ 小学
or /ɔː(r)/ conj. 或者；也不（用于否定句）
mother /ˈmʌðə(r)/ n. 母亲
child /tʃaɪld/ n. (pl. children /ˈtʃɪldrən/) 儿童；小孩
sister /ˈsɪstə(r)/ n. 姐；妹
brother /ˈbrʌðə(r)/ n. 兄；弟
cousin /ˈkʌzn/ n. 堂兄（弟、姊、妹）；表兄（弟、姊、妹）
aunt /ɑːnt/ n. 姑（姨、伯、婶、舅）母
grandmother /ˈɡrænmʌðə(r)/ (= grandma /ˈɡrænmɑː/ ) n. 奶奶；外婆
come /kʌm/v. 来；来到
ping-pong /ˈpɪŋpɒŋ/ n. 乒乓球运动
whose /huːz/ pron. 谁的
well /wel/ interj. 嗯；好吧 adv. 好；令人满意地 adj. 健康的
every /ˈevri/ adj. 每一；每个
day /deɪ/ n. 一天；白天
week /wiːk/ n. 周
fish /fɪʃ/v. 钓鱼 n. 鱼；鱼肉
father /ˈfɑːðə(r)/ n. 父亲；爸爸
piano /piˈænəʊ/ n. (pl. pianos) 钢琴
basketball /ˈbɑːskɪtbɔːl/ n. 篮球；篮球运动
read /riːd/v. 读；阅读
garden /ˈɡɑːdn/v. 做园艺工作；种植花木 n. 园圃；庭园
classroom /ˈklɑːsruːm/ n. 教室
their /ðeə(r)/ pron. 他（她、它）们的
clean /kliːn/ adj. 干净的 v. 使……干净；打扫
little /ˈlɪtl/ adj. 小的；年幼的
ball /bɔːl/ n. 球
playground /ˈpleɪɡraʊnd/ n. 游乐场；操场
wear /weə(r)/ v. 穿；戴
talk /tɔːk/v. & n. 说话；交谈
tall /tɔːl/ adj. 高的
short /ʃɔːt/ adj. 短的；矮的
hair /heə(r)/ n. 头发
long /lɒŋ/ adj. 长的
quiet /ˈkwaɪət/ adj. 安静的
girl /ɡɜːl/ n. 女孩
but /bʌt; bət/ conj. 但是
any /ˈeni/ adj. & pron. 任何（的）；任一（的）
photo /ˈfəʊtəʊ/ (= photograph /ˈfəʊtəɡrɑːf/) n. (pl. photos) 照片
pink /pɪŋk/ adj. & n. 粉红色（的）
left /left/ n. 左边 adv. 向左边
right /raɪt/ n. 右边 adv. 向右边 adj. 正确的；适当的
always /ˈɔːlweɪz/ adv. 总是
story /ˈstɔːri/ n. 故事
night /naɪt/ n. 夜晚
middle /ˈmɪdl/ n. 中间 adj. 中间的
think /θɪŋk/ v. 思考
football /ˈfʊtbɔːl/ n. 足球；足球运动
happy /ˈhæpi/ adj. 快乐的
eye /aɪ/ n. 眼睛
clever /ˈklevə(r)/ adj. 聪明的
next /nekst/ adj., adv. & n. 下一个（的）
him /hɪm; ɪm/ pron.（he的宾格）他
help /help/v. & n. 帮助
Unit 3 My School 小学
front /frʌnt/ n. 前面
art /ɑːt/ n. 艺术；美术
between /bɪˈtwiːn/ prep. 在……之间
library /ˈlaɪbrəri/ n. 图书馆
blackboard /ˈblækbɔːd/ n. 黑板
up /ʌp/ adv. 向上
back /bæk/ n. 后面；背部 adj. 后面的；背后的 adv. 回来；回原处
clock /klɒk/ n. 时钟；钟
map /mæp/ n. 地图
computer /kəmˈpjuːtə(r)/ n. 电脑
window /ˈwɪndəʊ/ n. 窗户
science /ˈsaɪəns/ n. 科学
picture /ˈpɪktʃə(r)/ n. 照片；图画
famous /ˈfeɪməs/ adj. 著名的
table /ˈteɪbl/ n. 桌子
today /təˈdeɪ/ adv. 在今天 n. 今天
email /ˈiːmeɪl/ n. 电子邮件 v.（给某人）发电子邮件
answer /ˈɑːnsə(r)/v. 回答；答复 n. 答案
question /ˈkwestʃən/ n. 问题
exercise /ˈeksəsaɪz/ n. & v. 运动；锻炼；练习
way /weɪ/ n. 方式；道路
best /best/ adj. 最好的 adv. 最
because /bɪˈkɒz/ conj. 因为
why /waɪ/ adv. 为什么
dear /dɪə(r)/ adj. 亲爱的
tell /tel/v. 告诉
interesting /ˈɪntrəstɪŋ/ adj. 有趣的
Unit 4 My Favorite Subject 小学
subject /ˈsʌbdʒɪkt/ n. 学科；科目
learn /lɜːn/v. 学习；得知
maths /mæθs/ (= mathematics /ˌmæθəˈmætɪks/, math /mæθ/) n. 数学
PE /ˌpiː ˈiː/ (= physical /ˈfɪzɪkl/, education /ˌedʒuˈkeɪʃn/) n. 体育
hard /hɑːd/ adj. 困难的 adv. 努力地
difficult /ˈdɪfɪkəlt/ adj. 困难的
sure /ʃʊə(r)/ adv. 当然；一定
easy /ˈiːzi/ adj. 容易的
use /juːz/v. 使用；利用 /juːs/ n. 使用；用途
give /ɡɪv/v. 给；送给；供给
idea /aɪˈdɪə/ n. 想法；主意
listen /ˈlɪsn/v. 听
draw /drɔː/v. 画画
travel /ˈtrævl/v. & n. 旅行；游历
walk /wɔːk/v. & n. 行走；步行
afternoon /ˌɑːftəˈnuːn/ n. 下午
then /ðen/ adv. 那时；然后；那么
Miss /mɪs/（对未婚女子的礼貌称呼） 小姐；女士
work /wɜːk/v. & n. 工作
sometimes /ˈsʌmtaɪmz/ adv. 有时
feel /fiːl/v. 感觉；觉得
busy /ˈbɪzi/ adj. 忙碌的；无暇的
study /ˈstʌdi/ v. & n. 学习；研究
song /sɒŋ/ n. 歌曲
out /aʊt/ adv. & prep.（从……里） 出来；出去
Unit 5 Fun Club 小学
sing /sɪŋ/v. 唱歌
swim /swɪm/v. & n. 游泳
run /rʌn/v. & n. 跑；跑步
fast /fɑːst/ adv. 快地 adj. 快的
dance /dɑːns/ v. & n. 跳舞
fly /flaɪ/v. 飞
watch /wɒtʃ/v. 注视；观看 n. 表；手表
cake /keɪk/ n. 蛋糕
cook /kʊk/v. 做饭 n. 厨师
noodle /ˈnuːdl/ n. (usually pl.) 面条
open /ˈəʊpən/v. 打开 adj. 开放的；敞开的
take /teɪk/v. 拍照；拿；取；买下
visit /ˈvɪzɪt/v. & n. 参观；拜访
park /pɑːk/ n. 公园
when /wen/ adv. 什么时候
share /ʃeə(r)/v. 分享；合用；分担
Unit 6 A Day in the Life 小学
o’clock /əˈklɒk / adv.（表示整点）……点钟
half /hɑːf/ n. 一半；半 pron. 半数
dress /dres/v. 穿衣服 n. 连衣裙
breakfast /ˈbrekfəst/ n. 早餐
before /bɪˈfɔː(r)/ prep. & conj在……以前 adv. 以前
begin /bɪˈɡɪn/v. 开始
dinner /ˈdɪnə(r)/ n. 正餐；主餐
early /ˈɜːli/ adj. 早的；早期的 adv. 提前；在早期
ask /ɑːsk/v. 询问；请求
unch /lʌntʃ/ n. 午餐
film /fɪlm/ n. 电影
lesson /ˈlesn/ n. 课；一节课
ice /aɪs/ n. 冰；冰块
Unit 7 Happy Birthday! 小学
birthday /ˈbɜːθdeɪ/ n. 生日
month /mʌnθ/ n. 月份
gift /ɡɪft/ n. 礼物
party /ˈpɑːti/ n. 聚会
buy /baɪ/v. 买
shop /ʃɒp/ n. 商店v. 逛商店；在商店购物
woman /ˈwʊmən/ n. (pl. women /ˈwɪmɪn/) 女人
candle /ˈkændl/ n. 蜡烛
will /wɪl/ modalv. 将要；会
egg /eɡ/ n. 蛋
juice /dʒuːs/ n. 果汁
milk /mɪlk/ n. 牛奶
candy /ˈkændi/ n. 糖果
drink /drɪŋk/ n. 饮品 v. 喝
card /kɑːd/ n. 厚纸片；卡片
doll /dɒl/ n. 玩偶；玩具娃娃
Mrs /ˈmɪsɪz/（对已婚妇女的礼貌称呼） 夫人；太太
eat /iːt/v. 吃
wish /wɪʃ/v. 希望；祝愿 n. 愿望
nurse /nɜːs/ n. 护士
hear /hɪə(r)/v. 听到
door /dɔː(r)/ n. 门
`;

function parseTextToUnits(text: string, sourceName: string): Unit[] {
  const lines = text.split('\n');
  const units: Unit[] = [];
  let currentUnit: Unit | null = null;

  // Modified regex to capture the full line if it looks like a unit header
  // Handles cases where text is stuck to "Unit X" like "Unit 1make"
  const unitHeaderStartRegex = /^(Unit\s+\d+|Starter\s+Unit\s+\d+)/i;
  
  // Regex to match "Word /Phonetic/ Translation" or "Word Translation"
  // Captures: 1=Word, 2=Phonetic (optional), 3=Translation
  const lineRegex = /^([a-zA-Z\s\-\(\)\.’'’]+?)(?:\s+(\/[^\/]+\/|\[[^\]]+\]))?\s+(.*)$/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Check for Unit Header
    const headerMatch = unitHeaderStartRegex.exec(line);
    if (headerMatch) {
      let title = headerMatch[1]; // e.g. "Unit 1"
      let restOfLine = line.substring(title.length); 

      // If the rest of the line starts with a letter immediately, it's the "stuck word" case (File 1)
      // e.g. "Unit 1make friends..."
      // If it starts with a space, it might be a title description "Unit 3 My School"
      
      let stuckItem: VocabularyItem | null = null;

      if (restOfLine.length > 0 && !/^\s/.test(restOfLine)) {
         // Case: Stuck word "make friends..."
         // The title is just the "Unit X" part
         // We parse "make friends..." as an item
         const itemMatch = lineRegex.exec(restOfLine);
         if (itemMatch) {
            stuckItem = {
                word: itemMatch[1].trim(),
                phonetic: itemMatch[2] || '',
                translation: itemMatch[3].trim()
            };
         }
      } else {
         // Case: Normal title "Unit 3 My School"
         title = line; // Use full line as title
      }

      currentUnit = {
        title: title.trim(),
        source: sourceName,
        items: []
      };
      units.push(currentUnit);

      if (stuckItem) {
          currentUnit.items.push(stuckItem);
      }
      continue;
    }

    // Process Word Line
    if (currentUnit) {
      // Ignore page numbers like "p.31" or "p.7"
      if (/^p\.\d+$/.test(line)) continue;

      const match = lineRegex.exec(line);
      if (match) {
        currentUnit.items.push({
          word: match[1].trim(),
          phonetic: match[2] || '',
          translation: match[3].trim()
        });
      }
    }
  }

  return units;
}

const units1 = parseTextToUnits(rawFile1, "Book 1");
const units2 = parseTextToUnits(rawFile2, "Book 2 (Starter)");

// Export combined units
export const allUnits: Unit[] = [...units2, ...units1];

// Helper to get default unit
export const getDefaultUnit = () => allUnits[0];
