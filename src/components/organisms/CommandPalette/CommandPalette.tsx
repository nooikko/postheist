'use client';
import { Command } from 'cmdk';
import { useState, useMemo, useCallback, useRef, useContext } from 'react';
import { Button, ButtonProps, Kbd, Modal, ModalContent } from '@nextui-org/react';
import { CloseIcon } from '@nextui-org/shared-icons';
import { tv } from 'tailwind-variants';
import { usePathname, useRouter } from 'next/navigation';
import { clsx } from '@nextui-org/shared-utils';
import scrollIntoView from 'scroll-into-view-if-needed';
import { isWebKit } from '@react-aria/utils';
import { writeStorage, useLocalStorage } from '@rehooks/local-storage';
import { SearchContext } from '#atoms/SearchContext';

import { useUpdateEffect } from '#hooks/useUpdateEffect';

const hideOnPaths = ['examples'];

export interface CmdkStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const cmdk = tv({
  slots: {
    base: 'max-h-full overflow-y-auto',
    header: ['flex', 'items-center', 'w-full', 'px-4', 'border-b', 'border-default-400/50', 'dark:border-default-100'],
    searchIcon: 'text-default-400 text-lg',
    input: [
      'w-full',
      'px-2',
      'h-14',
      'font-sans',
      'text-lg',
      'outline-none',
      'rounded-none',
      'bg-transparent',
      'text-default-700',
      'placeholder-default-500',
      'dark:text-default-500',
      'dark:placeholder:text-default-300',
    ],
    list: ['px-4', 'mt-2', 'pb-4', 'overflow-y-auto', 'max-h-[50vh]'],
    itemWrapper: [
      'px-4',
      'mt-2',
      'group',
      'flex',
      'h-16',
      'justify-between',
      'items-center',
      'rounded-lg',
      'shadow',
      'bg-content2/50',
      'active:opacity-70',
      'cursor-pointer',
      'transition-opacity',
      'data-[active=true]:bg-primary',
      'data-[active=true]:text-primary-foreground',
    ],
    leftWrapper: ['flex', 'gap-3', 'items-center', 'w-full', 'max-w-full'],
    leftIcon: ['text-default-500 dark:text-default-300', 'group-data-[active=true]:text-primary-foreground'],
    itemContent: ['flex', 'flex-col', 'gap-0', 'justify-center', 'max-w-[80%]'],
    itemParentTitle: ['text-default-400', 'text-xs', 'group-data-[active=true]:text-primary-foreground', 'select-none'],
    itemTitle: ['truncate', 'text-default-500', 'group-data-[active=true]:text-primary-foreground', 'select-none'],
    emptyWrapper: ['flex', 'flex-col', 'text-center', 'items-center', 'justify-center', 'h-32'],
  },
});

interface SearchResultItem {
  content: string;
  objectID: string;
  url: string;
  type: 'lvl1' | 'lvl2' | 'lvl3';
  hierarchy: {
    lvl1: string | null;
    lvl2?: string | null;
    lvl3?: string | null;
  };
}

const RECENT_SEARCHES_KEY = 'recent-searches';
const MAX_RECENT_SEARCHES = 10;

export const CommandPalette: React.FC = () => {
  const [query, setQuery] = useState('');
  const [activeItem, setActiveItem] = useState(0);
  const slots = useMemo(() => cmdk(), []);
  const { isOpen, setIsOpen } = useContext(SearchContext);

  const pathname = usePathname();

  const eventRef = useRef<'mouse' | 'keyboard'>();
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [recentSearches] = useLocalStorage<SearchResultItem[]>(RECENT_SEARCHES_KEY);

  const items: any = [];

  // Toggle the menu when ⌘K / CTRL K is pressed

  const onItemSelect = useCallback(
    (item: SearchResultItem) => {
      const addToRecentSearches = (item: SearchResultItem) => {
        let searches = recentSearches ?? [];

        // Avoid adding the same search again
        if (!searches.find((i) => i.objectID === item.objectID)) {
          writeStorage(RECENT_SEARCHES_KEY, [item, ...searches].slice(0, MAX_RECENT_SEARCHES));
        } else {
          // Move the search to the top
          searches = searches.filter((i) => i.objectID !== item.objectID);
          writeStorage(RECENT_SEARCHES_KEY, [item, ...searches].slice(0, MAX_RECENT_SEARCHES));
        }
      };

      setIsOpen(false);
      router.push(item.url);
      addToRecentSearches(item);
    },
    [recentSearches, router, setIsOpen],
  );

  const onInputKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      eventRef.current = 'keyboard';
      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault();
          if (activeItem + 1 < items.length) {
            setActiveItem(activeItem + 1);
          }
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          if (activeItem - 1 >= 0) {
            setActiveItem(activeItem - 1);
          }
          break;
        }
        case 'Control':
        case 'Alt':
        case 'Shift': {
          e.preventDefault();
          break;
        }
        case 'Enter': {
          if (items?.length <= 0) {
            break;
          }

          onItemSelect(items[activeItem]);

          break;
        }
      }
    },
    [activeItem, items, onItemSelect],
  );

  useUpdateEffect(() => {
    setActiveItem(0);
  }, [query]);

  useUpdateEffect(() => {
    if (!listRef.current || eventRef.current === 'mouse') {
      return;
    }
    const node = null;

    if (!node) {
      return;
    }
    scrollIntoView(node, {
      scrollMode: 'if-needed',
      behavior: 'smooth',
      block: 'end',
      inline: 'end',
      boundary: listRef.current,
    });
  }, [activeItem]);

  const CloseButton = useCallback(({ onPress, className }: { onPress?: ButtonProps['onPress']; className?: ButtonProps['className'] }) => {
    return (
      <Button
        isIconOnly
        className={clsx('border border-default-400 data-[hover=true]:bg-content2 dark:border-default-100', className)}
        radius='full'
        size='sm'
        variant='bordered'
        onPress={onPress}
      >
        <CloseIcon />
      </Button>
    );
  }, []);

  const renderItem = useCallback(
    (item: SearchResultItem, index: number) => {
      const isLvl1 = item.type === 'lvl1';

      return (
        <Command.Item
          key={item.objectID}
          className={slots.itemWrapper()}
          data-active={index === activeItem}
          value={item.content}
          onMouseEnter={() => {
            eventRef.current = 'mouse';

            setActiveItem(index);
          }}
          onSelect={() => {
            if (eventRef.current === 'keyboard') {
              return;
            }

            onItemSelect(item);
          }}
        >
          <div className={slots.leftWrapper()}>
            <div className={slots.itemContent()}>
              {!isLvl1 && <span className={slots.itemParentTitle()}>{item.hierarchy.lvl1}</span>}
              <p className={slots.itemTitle()}>{item.content}</p>
            </div>
          </div>
        </Command.Item>
      );
    },
    [activeItem, onItemSelect, slots],
  );

  const shouldOpen = !hideOnPaths.some((path) => pathname.includes(path));

  return (
    <Modal
      hideCloseButton
      backdrop='opaque'
      classNames={{
        base: [
          'mt-[20vh]',
          'border-small',
          'dark:border-default-100',
          'supports-[backdrop-filter]:bg-background/80',
          'dark:supports-[backdrop-filter]:bg-background/30',
          'supports-[backdrop-filter]:backdrop-blur-md',
          'supports-[backdrop-filter]:backdrop-saturate-150',
        ],
        backdrop: ['bg-black/80'],
      }}
      isOpen={isOpen && shouldOpen}
      motionProps={{
        onAnimationComplete: () => {
          if (!isOpen) {
            setQuery('');
          }
        },
      }}
      placement='top-center'
      scrollBehavior='inside'
      size='xl'
      onClose={() => setIsOpen(false)}
    >
      <ModalContent>
        <Command className={slots.base()} label='Quick search command' shouldFilter={false}>
          <div className={slots.header()}>
            {/* <SearchLinearIcon className={slots.searchIcon()} strokeWidth={2} /> */}
            <Command.Input
              autoFocus={!isWebKit()}
              className={slots.input()}
              placeholder='Search documentation'
              value={query}
              onKeyDown={onInputKeyDown}
              onValueChange={setQuery}
            />
            {query.length > 0 && <CloseButton onPress={() => setQuery('')} />}
            <Kbd className='ml-2 hidden border-none px-2 py-1 text-[0.6rem] font-medium md:block'>ESC</Kbd>
          </div>
          <Command.List ref={listRef} className={slots.list()} role='listbox'>
            <Command.Empty>
              {query.length > 0 && (
                <div className={slots.emptyWrapper()}>
                  <div>
                    <p>No results for &quot;{query}&quot;</p>
                    {query.length === 1 ? (
                      <p className='text-default-400'>Try adding more characters to your search term.</p>
                    ) : (
                      <p className='text-default-400'>Try searching for something else.</p>
                    )}
                  </div>
                </div>
              )}
            </Command.Empty>

            {query === '' &&
              (Array.isArray(recentSearches) && recentSearches.length > 0 ? (
                <div className={slots.emptyWrapper()}>
                  <p className='text-default-400'>No recent searches</p>
                </div>
              ) : (
                recentSearches &&
                recentSearches.length > 0 && (
                  <Command.Group
                    heading={
                      <div className='flex items-center justify-between'>
                        <p className='text-default-600'>Recent</p>
                      </div>
                    }
                  >
                    {recentSearches.map((item, index) => renderItem(item, index))}
                  </Command.Group>
                )
              ))}

            {/* {results.map((item, index) => renderItem(item, index))} */}
          </Command.List>
        </Command>
      </ModalContent>
    </Modal>
  );
};
