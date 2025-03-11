# MyCamp

このプロジェクトは以下を参考に作成し、学習目的で改変を加えたものです：

- Udemy 講座 [The Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/)
- [@kenfdev/YelpCamp-ja](https://github.com/kenfdev/YelpCamp-ja)

## 概要

シンプルで使いやすいキャンプ場情報共有プラットフォームです。キャンプ場の基本情報とユーザーレビューを通じて、キャンパー同士で情報を共有できます。

## 現在実装済みの機能

### キャンプ場情報の管理

- 一覧表示：全てのキャンプ場を表示
- 詳細表示：個別のキャンプ場の詳細情報を表示
- 新規作成：新しいキャンプ場を登録（タイトル、画像 URL、価格、説明、場所）
- 編集：既存のキャンプ場情報を更新
- 削除：キャンプ場の削除

### レビュー機能

- レビューの投稿：各キャンプ場にレビューを追加
- レビューの削除：投稿したレビューの削除
- キャンプ場とレビューの関連付け
- キャンプ場削除時の関連レビューの一括削除

### データ検証

- キャンプ場データのバリデーション（Joi）
- レビューデータのバリデーション（Joi）
- エラーハンドリング

## 改善予定の機能

- [ ] 検索機能の追加
  - キャンプ場名での検索
  - シンプルで使いやすい検索インターフェース

## 使用技術

- Node.js
- Express
- MongoDB
- EJS（テンプレートエンジン）
- Joi（バリデーション）
- Method Override（HTTP メソッドの拡張）

## セットアップ

1. リポジトリをクローン：

   ```bash
   git clone git@github.com:IchikaCoding/MyCamp-v1.git
   cd MyCamp-v1
   ```

2. 依存関係のインストール：

   ```bash
   npm install
   ```

3. MongoDB の起動：

   ```bash
   # MongoDBが実行されていることを確認してください
   # デフォルトでは mongodb://localhost:27017/yelp-camp に接続します
   ```

4. アプリケーションの起動：

   ```bash
   node app.js
   # サーバーがポート3000で起動します
   ```
