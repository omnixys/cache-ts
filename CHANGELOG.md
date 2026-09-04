# 🧾 Changelog

All notable changes in this project will be documented in this file.


## [4.1.0](https://github.com/omnixys/cache-ts/compare/v4.0.0...v4.1.0) (2026-09-04)

### Log

* **Log:** add logger ([](https://github.com/omnixys/cache-ts/commit/7f1ab6981841815938fb32c1d3b157958e24498a))

## [4.0.0](https://github.com/omnixys/cache-ts/compare/v3.3.1...v4.0.0) (2026-09-02)

### Ci

* **Ci:** add missing labeler and dependabot config to match contracts ([](https://github.com/omnixys/cache-ts/commit/b8c12b5b59c4ef365cce367ab1c4b83e5e7c66d0))
* **Ci:** add PR build check workflow for main ([](https://github.com/omnixys/cache-ts/commit/eec357a67bba13f67b0898ac1e47f75107f9196f))
* **Ci:** add npm registry auth before install in release workflow ([](https://github.com/omnixys/cache-ts/commit/37f48d035b8f3c3fcd0dc7ffdfa2e325a188d733))

### Deps

* **Deps:** update omnixys deps ([](https://github.com/omnixys/cache-ts/commit/f0a3bd4a55326b9ddf09590e01626095c0658d71))

### Other

* **Other:** Merge pull request #1 from omnixys/migration/uuid-v7 ([](https://github.com/omnixys/cache-ts/commit/f168f9002e54ce23a776533b5646659dceee7207)), closes [#1](https://github.com/omnixys/cache-ts/issues/1)

### Runtime

* **Runtime:** require node 26.8.1 and pnpm 11.24.0 ([](https://github.com/omnixys/cache-ts/commit/5ac8c2d43c0c8f79f6290636bb2f515100b3ba35))

## [3.3.1](https://github.com/omnixys/cache-ts/compare/v3.3.0...v3.3.1) (2026-08-28)

### Deps

* **Deps:** update contracts-ts ([](https://github.com/omnixys/cache-ts/commit/f3ab410eeae4d31e6f488fcb1f9c576b7f753891))

## [3.3.0](https://github.com/omnixys/cache-ts/compare/v3.2.0...v3.3.0) (2026-08-24)

### Agent

* **Agent:** add repository development instructions ([](https://github.com/omnixys/cache-ts/commit/3aeb3c2125b69f670c7f9631cbbb5a3ddeb1398f))

### Cache

* **Cache:** log errors via OmnixysLogger on all exception paths ([](https://github.com/omnixys/cache-ts/commit/f6fd12b57e33ab925bcd7294e507047ec9b78d8f))

### Context

* **Context:** update dependency ([](https://github.com/omnixys/cache-ts/commit/052185972f021ae89ddef2a710c61e7012614f40))

## [3.2.0](https://github.com/omnixys/cache-ts/compare/v3.1.1...v3.2.0) (2026-08-01)

### Cache

* **Cache:** add tenant membership cache key ([](https://github.com/omnixys/cache-ts/commit/7e42b72c4f48fc2eb3bfea8ab46e81c947768a7a))

### Deps

* **Deps:** update omnixs package deps ([](https://github.com/omnixys/cache-ts/commit/fa823cba92e25f15fc084002d2183bbd0639499b))

## [3.1.1](https://github.com/omnixys/cache-ts/compare/v3.1.0...v3.1.1) (2026-07-30)

### Deps

* **Deps:** fix imports ([](https://github.com/omnixys/cache-ts/commit/3715fe47837ce9feed401f377b92bb9365814fa4))

## [3.1.0](https://github.com/omnixys/cache/compare/v3.0.1...v3.1.0) (2026-07-30)

### Cache

* **Cache:** add namespaced raw deletion ([](https://github.com/omnixys/cache/commit/9cd8a4bc886b8e964d36b500b73295e851ea7481))

### Deps

* **Deps:** fix imports ([](https://github.com/omnixys/cache/commit/48fe2a6a0aa464ab911b69a89a3614e86755fe39))

## [3.0.1](https://github.com/omnixys/cache/compare/v3.0.0...v3.0.1) (2026-07-23)

### Deps

* **Deps:** update logger+observability+contracts deps version ([](https://github.com/omnixys/cache/commit/2f42a056bab2e9a655b5dd5a0783df6cdb7ca462))

## [3.0.0](https://github.com/omnixys/cache/compare/v2.1.0...v3.0.0) (2026-07-15)

### Update

* **Update:** update package ([](https://github.com/omnixys/cache/commit/86f49a415a711cbc73d9ae597aa0d058867fbcfc))

## [2.1.0](https://github.com/omnixys/cache/compare/v2.0.2...v2.1.0) (2026-07-02)

### Ticket generator

* **Ticket generator:** add delay Job for Ticket ([](https://github.com/omnixys/cache/commit/579fdb35969206176f6a72df2d4a6e28e9449584))

## [2.0.2](https://github.com/omnixys/cache/compare/v2.0.1...v2.0.2) (2026-06-24)

### Dep

* **Dep:** update dependencies ([](https://github.com/omnixys/cache/commit/390368d403fe99df2462eeac5392ad8b1840deca))

## [2.0.1](https://github.com/omnixys/cache/compare/v2.0.0...v2.0.1) (2026-06-23)

### Dep

* **Dep:** update dependecies ([](https://github.com/omnixys/cache/commit/719ab128aa5213abae34196aae9fa0ba8bd5e3b3))

### Other

* **Other:** Merge branch 'main' of https://github.com/omnixys/cache ([](https://github.com/omnixys/cache/commit/03316ee05f3343b2933bc551c39b015c2b656520))

## [2.0.0](https://github.com/omnixys/cache/compare/v1.0.0...v2.0.0) (2026-06-23)

### Cache

* **Cache:** declare runtime peer dependencies ([](https://github.com/omnixys/cache/commit/f53ee1bf4ebeba77d24594a7ae03a3dc97064581))
* **Cache:** add atomic set-if-absent primitive ([](https://github.com/omnixys/cache/commit/85d648e2b238bff65311c216bfe8dd7cfd90e683))
* **Cache:** add lifecycle and reliable delayed jobs ([](https://github.com/omnixys/cache/commit/f0cba3fb6e1916fb81a6e9203255e5326c09a55c))
* **Cache:** consume canonical contracts ([](https://github.com/omnixys/cache/commit/393867b6b9e3dd05547e209f190b5311e1a84fdf))

## 1.0.0 (2026-04-25)

### ⚠ BREAKING CHANGE

* **Delay-job:** The delayed job system has been completely reworked.

- Removed ZSET-based scheduling and polling scheduler
- Removed requeue-based delay handling (no more enqueue loops)
- Removed lock-based execution (ValkeyLockService no longer used)
- Delay handling is now performed inside the worker via in-process waiting
- Stream (XREADGROUP) is now the single source of truth for job execution

Key changes:
- DelayedJobService now pushes jobs directly to Valkey Streams
- DelayedJobWorker no longer requeues jobs for delay handling
- Job execution timing is handled via `executeAt` + in-worker delay
- Simplified architecture: no scheduler, no ZSET, no dual-system conflicts
- Registry-based handler execution remains, but is now the only dispatch mechanism

Implications:
- Previous delayed jobs stored in ZSET are no longer processed
- Any custom logic relying on requeue behavior must be migrated
- Lock-based guarantees have been removed (replaced by consumer group semantics)
- Worker behavior is now time-dependent (sleep) instead of Redis-driven scheduling

Migration guide:
- Remove any usage of scheduler components
- Remove lock service dependencies for delayed jobs
- Ensure workers run as separate processes
- Verify all jobs include `executeAt` timestamp
- Validate handler idempotency (no lock protection anymore)

Performance:
- Eliminates Redis storm caused by requeue loops
- Reduces CPU usage and network overhead
- Provides deterministic execution flow
* **Cache:** Complete redesign of caching layer with unified APIs, decorator-based caching,
and first-class support for distributed cache backends (Valkey/Redis).
Legacy cache helpers and inconsistent patterns have been removed.

✨ Features:
- Unified cache abstraction layer for NestJS applications
- First-class Valkey (Redis-compatible) integration
- Decorator-based caching:
  - @Cacheable() for method result caching
  - @CacheEvict() for invalidation
  - @CachePut() for write-through updates
- Typed cache APIs:
  - get<T>()
  - set<T>()
  - getJson<T>()
  - setJson<T>()
- Automatic serialization/deserialization with type safety
- TTL management:
  - Per-key TTL configuration
  - Centralized TTL policies
- Atomic operations:
  - increment / decrement
  - NX / EX support (e.g. replay protection, locks)
- Namespaced key management and key builders
- Built-in support for:
  - Rate limiting stores
  - Risk memory stores
  - Replay protection (idempotency keys)
- Pub/Sub and Streams support (Valkey-based)

⚙️ Improvements:
- Strongly typed cache access with generics
- Eliminated duplicated cache logic across services
- Improved performance via optimized serialization and batching
- Consistent key naming conventions across all modules
- Reduced boilerplate through decorators and helpers

🧱 Architecture:
- Modular NestJS dynamic module (CacheModule.forRoot / forRootAsync)
- Pluggable backend support (Valkey, Redis, in-memory fallback)
- Separation of concerns:
  - Cache API
  - Serialization layer
  - Key management
- Designed for distributed microservice environments

🛑 Removed / Changed:
- Removed ad-hoc cache usage and direct client access patterns
- Replaced manual JSON handling with typed helpers
- Deprecated inconsistent TTL and key naming strategies

📦 Compatibility:
- Requires Node.js >= 20
- Designed for NestJS-based microservices
- Fully compatible with:
  - @omnixys/security (rate limiting, risk memory)
  - @omnixys/kafka (event-driven cache invalidation)
  - @omnixys/observability (cache tracing)
  - @omnixys/context (request-aware caching)

📚 Notes:
This release establishes a unified, distributed caching foundation for Omnixys services,
enabling consistent data access patterns, performance optimization, and scalable
state management across microservices.
* **Cache:** Complete redesign of caching layer with unified APIs, decorator-based caching,
and first-class support for distributed cache backends (Valkey/Redis).
Legacy cache helpers and inconsistent patterns have been removed.

✨ Features:
- Unified cache abstraction layer for NestJS applications
- First-class Valkey (Redis-compatible) integration
- Decorator-based caching:
  - @Cacheable() for method result caching
  - @CacheEvict() for invalidation
  - @CachePut() for write-through updates
- Typed cache APIs:
  - get<T>()
  - set<T>()
  - getJson<T>()
  - setJson<T>()
- Automatic serialization/deserialization with type safety
- TTL management:
  - Per-key TTL configuration
  - Centralized TTL policies
- Atomic operations:
  - increment / decrement
  - NX / EX support (e.g. replay protection, locks)
- Namespaced key management and key builders
- Built-in support for:
  - Rate limiting stores
  - Risk memory stores
  - Replay protection (idempotency keys)
- Pub/Sub and Streams support (Valkey-based)

⚙️ Improvements:
- Strongly typed cache access with generics
- Eliminated duplicated cache logic across services
- Improved performance via optimized serialization and batching
- Consistent key naming conventions across all modules
- Reduced boilerplate through decorators and helpers

🧱 Architecture:
- Modular NestJS dynamic module (CacheModule.forRoot / forRootAsync)
- Pluggable backend support (Valkey, Redis, in-memory fallback)
- Separation of concerns:
  - Cache API
  - Serialization layer
  - Key management
- Designed for distributed microservice environments

🛑 Removed / Changed:
- Removed ad-hoc cache usage and direct client access patterns
- Replaced manual JSON handling with typed helpers
- Deprecated inconsistent TTL and key naming strategies

📦 Compatibility:
- Requires Node.js >= 20
- Designed for NestJS-based microservices
- Fully compatible with:
  - @omnixys/security (rate limiting, risk memory)
  - @omnixys/kafka (event-driven cache invalidation)
  - @omnixys/observability (cache tracing)
  - @omnixys/context (request-aware caching)

📚 Notes:
This release establishes a unified, distributed caching foundation for Omnixys services,
enabling consistent data access patterns, performance optimization, and scalable
state management across microservices.

### Cache

* **Cache:** unified caching layer, decorators & distributed Valkey support ([](https://github.com/omnixys/cache/commit/c98e65d900613a56c19cfdec27c54e4c7ac7b431))
* **Cache:** unified caching layer, decorators & distributed Valkey support ([](https://github.com/omnixys/cache/commit/88116d230fc86569b84353ef27df10778d931fe0))

### Delay-job

* **Delay-job:** redesign delayed job ([](https://github.com/omnixys/cache/commit/9d2bd5d081ddea6536427578cca92f9f55e6f43b))
* **Delay-job:** redesign delayed job ([](https://github.com/omnixys/cache/commit/44eb79f2c9b800cb86f7c1c0972a5ecafc3926bb))
* **Delay-job:** redesign delayed job s ([](https://github.com/omnixys/cache/commit/674368c5df5bb4988c64666dedc0f6f27a7d4e36))
* **Delay-job:** redesign delayed job system using stream-based ([](https://github.com/omnixys/cache/commit/5c086ce43e8eb1cd9db28cff002b01b66d32d626))
* **Delay-job:** redesign delayed job system using stream-based ([](https://github.com/omnixys/cache/commit/75cf94e784961f88042c489be8e0b6bccf8af9fa))
* **Delay-job:** redesign delayed job system using stream-based ([](https://github.com/omnixys/cache/commit/8ecd5a5bdb5b4053122ae44d03c9b52c387e444a))
* **Delay-job:** redesign delayed job system using stream-based execution ([](https://github.com/omnixys/cache/commit/eb15034a624838aa5bce1fa8b438028275aa118a))

### H

* **H:** h ([](https://github.com/omnixys/cache/commit/2a3d2512995d8bd3fe41be2f975a75ee4a8fa4d5))

### Other

* **Other:** l ([](https://github.com/omnixys/cache/commit/888a95dffb203a4a3401adbd9320ca8aeb8b6d34))

### Readme

* **Readme:** update ([](https://github.com/omnixys/cache/commit/f4876cc185b3c8af58dfdbbba3d4100290ace208))
* **Readme:** update ([](https://github.com/omnixys/cache/commit/0cbe5a4d96563d24ecc49a30dbc97beca38a95c3))

### Release

* **Release:** 1.0.0 [skip ci] ([](https://github.com/omnixys/cache/commit/0292763fd1ae40ac3f90dabf671586c2b4c662a0))
* **Release:** 1.0.0 [skip ci] ([](https://github.com/omnixys/cache/commit/1a1cb6f69251e571b3d216445daee59a942bb17e))
* **Release:** 1.0.0 [skip ci] ([](https://github.com/omnixys/cache/commit/f58e5c7725fe82c3bd794e7a7709e000bbd87e69))
* **Release:** 2.0.0 [skip ci] ([](https://github.com/omnixys/cache/commit/92fbf6ce3daa019fa69abe55da37ae16f8d4c21d))

### U

* **U:** d ([](https://github.com/omnixys/cache/commit/58261584016d42c279ff85a63c9b57b1675d5da4))
* **U:** u ([](https://github.com/omnixys/cache/commit/f89cd535b8244a96973c601ff6cd81de475114e8))
* **U:** u ([](https://github.com/omnixys/cache/commit/35564bd42302dc127b37d574ffdc0acf0e73c866))

### Update

* **Update:** update ([](https://github.com/omnixys/cache/commit/17f0f0015cdecf6401794f87b8467f799662e273))

## [2.0.0](https://github.com/omnixys/cache/compare/v1.0.0...v2.0.0) (2026-04-25)

### Delay-job

* **Delay-job:** redesign delayed job system using stream-based ([](https://github.com/omnixys/cache/commit/5c086ce43e8eb1cd9db28cff002b01b66d32d626))

## 1.0.0 (2026-04-25)

### ⚠ BREAKING CHANGE

* **Delay-job:** The delayed job system has been completely reworked.

- Removed ZSET-based scheduling and polling scheduler
- Removed requeue-based delay handling (no more enqueue loops)
- Removed lock-based execution (ValkeyLockService no longer used)
- Delay handling is now performed inside the worker via in-process waiting
- Stream (XREADGROUP) is now the single source of truth for job execution

Key changes:
- DelayedJobService now pushes jobs directly to Valkey Streams
- DelayedJobWorker no longer requeues jobs for delay handling
- Job execution timing is handled via `executeAt` + in-worker delay
- Simplified architecture: no scheduler, no ZSET, no dual-system conflicts
- Registry-based handler execution remains, but is now the only dispatch mechanism

Implications:
- Previous delayed jobs stored in ZSET are no longer processed
- Any custom logic relying on requeue behavior must be migrated
- Lock-based guarantees have been removed (replaced by consumer group semantics)
- Worker behavior is now time-dependent (sleep) instead of Redis-driven scheduling

Migration guide:
- Remove any usage of scheduler components
- Remove lock service dependencies for delayed jobs
- Ensure workers run as separate processes
- Verify all jobs include `executeAt` timestamp
- Validate handler idempotency (no lock protection anymore)

Performance:
- Eliminates Redis storm caused by requeue loops
- Reduces CPU usage and network overhead
- Provides deterministic execution flow
* **Cache:** Complete redesign of caching layer with unified APIs, decorator-based caching,
and first-class support for distributed cache backends (Valkey/Redis).
Legacy cache helpers and inconsistent patterns have been removed.

✨ Features:
- Unified cache abstraction layer for NestJS applications
- First-class Valkey (Redis-compatible) integration
- Decorator-based caching:
  - @Cacheable() for method result caching
  - @CacheEvict() for invalidation
  - @CachePut() for write-through updates
- Typed cache APIs:
  - get<T>()
  - set<T>()
  - getJson<T>()
  - setJson<T>()
- Automatic serialization/deserialization with type safety
- TTL management:
  - Per-key TTL configuration
  - Centralized TTL policies
- Atomic operations:
  - increment / decrement
  - NX / EX support (e.g. replay protection, locks)
- Namespaced key management and key builders
- Built-in support for:
  - Rate limiting stores
  - Risk memory stores
  - Replay protection (idempotency keys)
- Pub/Sub and Streams support (Valkey-based)

⚙️ Improvements:
- Strongly typed cache access with generics
- Eliminated duplicated cache logic across services
- Improved performance via optimized serialization and batching
- Consistent key naming conventions across all modules
- Reduced boilerplate through decorators and helpers

🧱 Architecture:
- Modular NestJS dynamic module (CacheModule.forRoot / forRootAsync)
- Pluggable backend support (Valkey, Redis, in-memory fallback)
- Separation of concerns:
  - Cache API
  - Serialization layer
  - Key management
- Designed for distributed microservice environments

🛑 Removed / Changed:
- Removed ad-hoc cache usage and direct client access patterns
- Replaced manual JSON handling with typed helpers
- Deprecated inconsistent TTL and key naming strategies

📦 Compatibility:
- Requires Node.js >= 20
- Designed for NestJS-based microservices
- Fully compatible with:
  - @omnixys/security (rate limiting, risk memory)
  - @omnixys/kafka (event-driven cache invalidation)
  - @omnixys/observability (cache tracing)
  - @omnixys/context (request-aware caching)

📚 Notes:
This release establishes a unified, distributed caching foundation for Omnixys services,
enabling consistent data access patterns, performance optimization, and scalable
state management across microservices.
* **Cache:** Complete redesign of caching layer with unified APIs, decorator-based caching,
and first-class support for distributed cache backends (Valkey/Redis).
Legacy cache helpers and inconsistent patterns have been removed.

✨ Features:
- Unified cache abstraction layer for NestJS applications
- First-class Valkey (Redis-compatible) integration
- Decorator-based caching:
  - @Cacheable() for method result caching
  - @CacheEvict() for invalidation
  - @CachePut() for write-through updates
- Typed cache APIs:
  - get<T>()
  - set<T>()
  - getJson<T>()
  - setJson<T>()
- Automatic serialization/deserialization with type safety
- TTL management:
  - Per-key TTL configuration
  - Centralized TTL policies
- Atomic operations:
  - increment / decrement
  - NX / EX support (e.g. replay protection, locks)
- Namespaced key management and key builders
- Built-in support for:
  - Rate limiting stores
  - Risk memory stores
  - Replay protection (idempotency keys)
- Pub/Sub and Streams support (Valkey-based)

⚙️ Improvements:
- Strongly typed cache access with generics
- Eliminated duplicated cache logic across services
- Improved performance via optimized serialization and batching
- Consistent key naming conventions across all modules
- Reduced boilerplate through decorators and helpers

🧱 Architecture:
- Modular NestJS dynamic module (CacheModule.forRoot / forRootAsync)
- Pluggable backend support (Valkey, Redis, in-memory fallback)
- Separation of concerns:
  - Cache API
  - Serialization layer
  - Key management
- Designed for distributed microservice environments

🛑 Removed / Changed:
- Removed ad-hoc cache usage and direct client access patterns
- Replaced manual JSON handling with typed helpers
- Deprecated inconsistent TTL and key naming strategies

📦 Compatibility:
- Requires Node.js >= 20
- Designed for NestJS-based microservices
- Fully compatible with:
  - @omnixys/security (rate limiting, risk memory)
  - @omnixys/kafka (event-driven cache invalidation)
  - @omnixys/observability (cache tracing)
  - @omnixys/context (request-aware caching)

📚 Notes:
This release establishes a unified, distributed caching foundation for Omnixys services,
enabling consistent data access patterns, performance optimization, and scalable
state management across microservices.

### Cache

* **Cache:** unified caching layer, decorators & distributed Valkey support ([](https://github.com/omnixys/cache/commit/c98e65d900613a56c19cfdec27c54e4c7ac7b431))
* **Cache:** unified caching layer, decorators & distributed Valkey support ([](https://github.com/omnixys/cache/commit/88116d230fc86569b84353ef27df10778d931fe0))

### Delay-job

* **Delay-job:** redesign delayed job ([](https://github.com/omnixys/cache/commit/9d2bd5d081ddea6536427578cca92f9f55e6f43b))
* **Delay-job:** redesign delayed job ([](https://github.com/omnixys/cache/commit/44eb79f2c9b800cb86f7c1c0972a5ecafc3926bb))
* **Delay-job:** redesign delayed job s ([](https://github.com/omnixys/cache/commit/674368c5df5bb4988c64666dedc0f6f27a7d4e36))
* **Delay-job:** redesign delayed job system using stream-based ([](https://github.com/omnixys/cache/commit/75cf94e784961f88042c489be8e0b6bccf8af9fa))
* **Delay-job:** redesign delayed job system using stream-based ([](https://github.com/omnixys/cache/commit/8ecd5a5bdb5b4053122ae44d03c9b52c387e444a))
* **Delay-job:** redesign delayed job system using stream-based execution ([](https://github.com/omnixys/cache/commit/eb15034a624838aa5bce1fa8b438028275aa118a))

### Other

* **Other:** l ([](https://github.com/omnixys/cache/commit/888a95dffb203a4a3401adbd9320ca8aeb8b6d34))

### Readme

* **Readme:** update ([](https://github.com/omnixys/cache/commit/f4876cc185b3c8af58dfdbbba3d4100290ace208))
* **Readme:** update ([](https://github.com/omnixys/cache/commit/0cbe5a4d96563d24ecc49a30dbc97beca38a95c3))

### Release

* **Release:** 1.0.0 [skip ci] ([](https://github.com/omnixys/cache/commit/1a1cb6f69251e571b3d216445daee59a942bb17e))
* **Release:** 1.0.0 [skip ci] ([](https://github.com/omnixys/cache/commit/f58e5c7725fe82c3bd794e7a7709e000bbd87e69))

### U

* **U:** d ([](https://github.com/omnixys/cache/commit/58261584016d42c279ff85a63c9b57b1675d5da4))
* **U:** u ([](https://github.com/omnixys/cache/commit/f89cd535b8244a96973c601ff6cd81de475114e8))
* **U:** u ([](https://github.com/omnixys/cache/commit/35564bd42302dc127b37d574ffdc0acf0e73c866))

### Update

* **Update:** update ([](https://github.com/omnixys/cache/commit/17f0f0015cdecf6401794f87b8467f799662e273))

## 1.0.0 (2026-04-15)

### ⚠ BREAKING CHANGE

* **Cache:** Complete redesign of caching layer with unified APIs, decorator-based caching,
and first-class support for distributed cache backends (Valkey/Redis).
Legacy cache helpers and inconsistent patterns have been removed.

✨ Features:
- Unified cache abstraction layer for NestJS applications
- First-class Valkey (Redis-compatible) integration
- Decorator-based caching:
  - @Cacheable() for method result caching
  - @CacheEvict() for invalidation
  - @CachePut() for write-through updates
- Typed cache APIs:
  - get<T>()
  - set<T>()
  - getJson<T>()
  - setJson<T>()
- Automatic serialization/deserialization with type safety
- TTL management:
  - Per-key TTL configuration
  - Centralized TTL policies
- Atomic operations:
  - increment / decrement
  - NX / EX support (e.g. replay protection, locks)
- Namespaced key management and key builders
- Built-in support for:
  - Rate limiting stores
  - Risk memory stores
  - Replay protection (idempotency keys)
- Pub/Sub and Streams support (Valkey-based)

⚙️ Improvements:
- Strongly typed cache access with generics
- Eliminated duplicated cache logic across services
- Improved performance via optimized serialization and batching
- Consistent key naming conventions across all modules
- Reduced boilerplate through decorators and helpers

🧱 Architecture:
- Modular NestJS dynamic module (CacheModule.forRoot / forRootAsync)
- Pluggable backend support (Valkey, Redis, in-memory fallback)
- Separation of concerns:
  - Cache API
  - Serialization layer
  - Key management
- Designed for distributed microservice environments

🛑 Removed / Changed:
- Removed ad-hoc cache usage and direct client access patterns
- Replaced manual JSON handling with typed helpers
- Deprecated inconsistent TTL and key naming strategies

📦 Compatibility:
- Requires Node.js >= 20
- Designed for NestJS-based microservices
- Fully compatible with:
  - @omnixys/security (rate limiting, risk memory)
  - @omnixys/kafka (event-driven cache invalidation)
  - @omnixys/observability (cache tracing)
  - @omnixys/context (request-aware caching)

📚 Notes:
This release establishes a unified, distributed caching foundation for Omnixys services,
enabling consistent data access patterns, performance optimization, and scalable
state management across microservices.
* **Cache:** Complete redesign of caching layer with unified APIs, decorator-based caching,
and first-class support for distributed cache backends (Valkey/Redis).
Legacy cache helpers and inconsistent patterns have been removed.

✨ Features:
- Unified cache abstraction layer for NestJS applications
- First-class Valkey (Redis-compatible) integration
- Decorator-based caching:
  - @Cacheable() for method result caching
  - @CacheEvict() for invalidation
  - @CachePut() for write-through updates
- Typed cache APIs:
  - get<T>()
  - set<T>()
  - getJson<T>()
  - setJson<T>()
- Automatic serialization/deserialization with type safety
- TTL management:
  - Per-key TTL configuration
  - Centralized TTL policies
- Atomic operations:
  - increment / decrement
  - NX / EX support (e.g. replay protection, locks)
- Namespaced key management and key builders
- Built-in support for:
  - Rate limiting stores
  - Risk memory stores
  - Replay protection (idempotency keys)
- Pub/Sub and Streams support (Valkey-based)

⚙️ Improvements:
- Strongly typed cache access with generics
- Eliminated duplicated cache logic across services
- Improved performance via optimized serialization and batching
- Consistent key naming conventions across all modules
- Reduced boilerplate through decorators and helpers

🧱 Architecture:
- Modular NestJS dynamic module (CacheModule.forRoot / forRootAsync)
- Pluggable backend support (Valkey, Redis, in-memory fallback)
- Separation of concerns:
  - Cache API
  - Serialization layer
  - Key management
- Designed for distributed microservice environments

🛑 Removed / Changed:
- Removed ad-hoc cache usage and direct client access patterns
- Replaced manual JSON handling with typed helpers
- Deprecated inconsistent TTL and key naming strategies

📦 Compatibility:
- Requires Node.js >= 20
- Designed for NestJS-based microservices
- Fully compatible with:
  - @omnixys/security (rate limiting, risk memory)
  - @omnixys/kafka (event-driven cache invalidation)
  - @omnixys/observability (cache tracing)
  - @omnixys/context (request-aware caching)

📚 Notes:
This release establishes a unified, distributed caching foundation for Omnixys services,
enabling consistent data access patterns, performance optimization, and scalable
state management across microservices.

### Cache

* **Cache:** unified caching layer, decorators & distributed Valkey support ([](https://github.com/omnixys/cache/commit/c98e65d900613a56c19cfdec27c54e4c7ac7b431))
* **Cache:** unified caching layer, decorators & distributed Valkey support ([](https://github.com/omnixys/cache/commit/88116d230fc86569b84353ef27df10778d931fe0))

### Release

* **Release:** 1.0.0 [skip ci] ([](https://github.com/omnixys/cache/commit/f58e5c7725fe82c3bd794e7a7709e000bbd87e69))

## 1.0.0 (2026-04-15)

### ⚠ BREAKING CHANGE

* **Cache:** Complete redesign of caching layer with unified APIs, decorator-based caching,
and first-class support for distributed cache backends (Valkey/Redis).
Legacy cache helpers and inconsistent patterns have been removed.

✨ Features:
- Unified cache abstraction layer for NestJS applications
- First-class Valkey (Redis-compatible) integration
- Decorator-based caching:
  - @Cacheable() for method result caching
  - @CacheEvict() for invalidation
  - @CachePut() for write-through updates
- Typed cache APIs:
  - get<T>()
  - set<T>()
  - getJson<T>()
  - setJson<T>()
- Automatic serialization/deserialization with type safety
- TTL management:
  - Per-key TTL configuration
  - Centralized TTL policies
- Atomic operations:
  - increment / decrement
  - NX / EX support (e.g. replay protection, locks)
- Namespaced key management and key builders
- Built-in support for:
  - Rate limiting stores
  - Risk memory stores
  - Replay protection (idempotency keys)
- Pub/Sub and Streams support (Valkey-based)

⚙️ Improvements:
- Strongly typed cache access with generics
- Eliminated duplicated cache logic across services
- Improved performance via optimized serialization and batching
- Consistent key naming conventions across all modules
- Reduced boilerplate through decorators and helpers

🧱 Architecture:
- Modular NestJS dynamic module (CacheModule.forRoot / forRootAsync)
- Pluggable backend support (Valkey, Redis, in-memory fallback)
- Separation of concerns:
  - Cache API
  - Serialization layer
  - Key management
- Designed for distributed microservice environments

🛑 Removed / Changed:
- Removed ad-hoc cache usage and direct client access patterns
- Replaced manual JSON handling with typed helpers
- Deprecated inconsistent TTL and key naming strategies

📦 Compatibility:
- Requires Node.js >= 20
- Designed for NestJS-based microservices
- Fully compatible with:
  - @omnixys/security (rate limiting, risk memory)
  - @omnixys/kafka (event-driven cache invalidation)
  - @omnixys/observability (cache tracing)
  - @omnixys/context (request-aware caching)

📚 Notes:
This release establishes a unified, distributed caching foundation for Omnixys services,
enabling consistent data access patterns, performance optimization, and scalable
state management across microservices.

### Cache

* **Cache:** unified caching layer, decorators & distributed Valkey support ([](https://github.com/omnixys/cache/commit/88116d230fc86569b84353ef27df10778d931fe0))
