import {useCallback, useEffect, useRef, useState} from "react";

type WakeLockSentinelLike = {
  released: boolean;
  release: () => Promise<void>;
  addEventListener?: (type: "release", listener: () => void) => void;
};

type WakeLockAPI = {
  request: (type: "screen") => Promise<WakeLockSentinelLike>;
};

type WakeLockStatus = {
  isSupported: boolean;
  isActive: boolean;
  error: string | undefined;
};

const getWakeLockApi = (): WakeLockAPI | undefined => {
  if (typeof navigator === "undefined") {
    return undefined;
  }

  return (navigator as Navigator & {wakeLock?: WakeLockAPI}).wakeLock;
};

export const useWakeLock = (enabled: boolean): WakeLockStatus => {
  const sentinelRef = useRef<WakeLockSentinelLike | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const isSupported = !!getWakeLockApi();

  const release = useCallback(async () => {
    if (!sentinelRef.current) {
      return;
    }

    try {
      await sentinelRef.current.release();
    } finally {
      sentinelRef.current = null;
      setIsActive(false);
    }
  }, []);

  const request = useCallback(async () => {
    if (!enabled) {
      await release();
      return;
    }

    const wakeLock = getWakeLockApi();
    if (!wakeLock) {
      setIsActive(false);
      setError("wake-lock-not-supported");
      return;
    }

    // Do not request twice while lock is still held.
    if (sentinelRef.current && !sentinelRef.current.released) {
      return;
    }

    try {
      const sentinel = await wakeLock.request("screen");
      sentinelRef.current = sentinel;
      setIsActive(true);
      setError(undefined);
      sentinel.addEventListener?.("release", () => {
        setIsActive(false);
      });
    } catch (requestError) {
      setIsActive(false);
      setError(requestError instanceof Error ? requestError.message : "wake-lock-request-failed");
    }
  }, [enabled, release]);

  useEffect(() => {
    void request();

    return () => {
      void release();
    };
  }, [request, release]);

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible" && enabled) {
        void request();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [enabled, request]);

  return {isSupported, isActive, error};
};

